import React, { useEffect, useState } from "react";
import Header from "../components/common/header";
import CardMyProduct from "../components/common/card_product_petani";
// import NavbarPetani from "../components/specific/navbar_seller";
import Navbar from "../components/specific/navbar";
// import Footer from "../components/specific/footer";
import request from "../utils/request";
import Cookies from "universal-cookie";
import LoadingScreen from "../components/common/loading";


const MyProduct = () => {
  const cookies = new Cookies();
  const [product, setProducts] = useState([]);
  const [sold, setSold] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const petaniID = cookies.get("petaniID");
    setLoading(true);
    try {
      const produkResponse = await request.get(`/produk/petani/${petaniID}`);
      const transaksiResponse = await request.get("/transaksi");

      const produkData = produkResponse.data.data;
      const transaksiData = transaksiResponse.data.data.productDetails;

      // Merge product data with totalSold from transaksi data
      const mergedData = produkData.map((product) => {
        const foundTransaksi = transaksiData.find(
          (transaksi) => transaksi.produkID === product.produkID
        );
        return {
          ...product,
          totalSold: foundTransaksi ? foundTransaksi.totalSold : 0,
        };
      });

      setProducts(mergedData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error fetching data:", error);
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
    <div className="max-w-screen-sm md:max-w-full px-[30px] md:px-[50px] lg:px-[60px] xl:px-[60px] 2xl:px-[110px]">
      <Navbar />
      <Header title={"My Product"} onClick={() => window.history.back()} />
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="mt-10 md:mt-24">
          {product.map((item) => (
            <CardMyProduct key={item.produkID} product={item} />
          ))}
        </div>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default MyProduct;
