import React from "react";
import Navbar from "../components/specific/navbar";
// import HeaderRiwayatPesanan from "../sections/riwayat_pesanan/header";
import ContentRiwayatPesanan from "../sections/riwayat_pesanan/content";
import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const RiwayatPesanan = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[30px] md:px-[50px] lg:px-[60px] xl:px-[60px] 2xl:px-[110px]">
      <Navbar />
      <Header title={"Orders History"} onClick={() => window.history.back()} />
      <ContentRiwayatPesanan />
      {/* <Footer /> */}
    </div>
  );
};

export default RiwayatPesanan;
