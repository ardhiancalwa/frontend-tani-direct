import React, { useEffect, useState } from "react";
// import NavbarPetani from "../../components/specific/navbar_seller";
import Navbar from "../../components/specific/navbar";
import ContentHistoryTransaction from "../../sections/history_transaction/content";
import Header from "../../components/common/header";
import Cookies from "universal-cookie";
import request from "../../utils/request";
import LoadingScreen from "../../components/common/loading";

const cookies = new Cookies();

const HistoryTransaction = () => {
  const [transaksi, setTransaksi] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchTransaksi = async () => {
    try {
      const response = await request.get("/transaksi");
      return response.data.data.transaksi;
    } catch (error) {
      console.error("Error fetching transaksi:", error);
      return [];
    }
  };

  const fetchPembeli = async (pembeliID) => {
    try {
      const response = await request.get(`/pembeli/${pembeliID}`);
      console.log(response.data.data.nama_pembeli);
      return response.data.data.nama_pembeli;
    } catch (error) {
      console.error("Error fetching pembeli:", error);
      return "Unknown";
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const transaksiList = await fetchTransaksi();
    const transaksiWithNames = await Promise.all(
      transaksiList.map(async (transaksi) => {
        const nama_pembeli = await fetchPembeli(transaksi.pembeliID);
        return { ...transaksi, nama_pembeli };
      })
    );
    setTransaksi(transaksiWithNames);
    setLoading(false);
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
      <Header
        title={"History Transaction"}
        onClick={() => window.history.back()}
      />
      {loading ? (
        <LoadingScreen />
      ) : (
        <ContentHistoryTransaction transaksi={transaksi} />
      )}
    </div>
  );
};

export default HistoryTransaction;
