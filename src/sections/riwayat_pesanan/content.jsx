import React, { useEffect, useState } from "react";
import ContainerRiwayatPesanan from "../../components/common/container_riwayatpesanan";
import request from "../../utils/request";
import Cookies from "universal-cookie";
import LoadingScreen from "../../components/common/loading";

const cookies = new Cookies();

const ContentRiwayatPesanan = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const pembeliID = cookies.get("pembeliID");
    setLoading(true);
    try {
      const response = await request.get(
        `/transaksi/pembeli/${pembeliID}/produk`
      );
      const transactions = response.data.data;

      // Proses setiap transaksi untuk mengambil produk yang dibeli
      const produkDibeli = transactions.flatMap((transaction) =>
        transaction.produk_dibeli.map((produk) => ({
          ...produk,
          berat_produk: produk.berat_produk ?? 20, // Mengatasi null dengan memberikan nilai default 0
        }))
      );     

      // Set state dengan data yang diambil
      setProducts(produkDibeli);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const tokenPembeli = cookies.get("token_pembeli");
    const tokenPetani = cookies.get("token_petani");

    if (tokenPembeli) {
      fetchData(tokenPembeli);
    } else if (tokenPetani) {
      fetchData(tokenPetani);
    } else {
      console.log("No token found");
    }
  }, []);

  return (
    <div className="w-full">
      {loading ? (
        <LoadingScreen />
      ) : (
        <ContainerRiwayatPesanan products={products}/>
      )}{" "}
    </div>
  );
};

export default ContentRiwayatPesanan;
