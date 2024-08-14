import React from "react";
// import NavbarPetani from "../../components/specific/navbar_seller";
import Navbar from "../../components/specific/navbar";
// import HeaderMenuPesanan from "../../sections/menu_pesanan/header";
import ContentMenuPesanan from "../../sections/menu_pesanan/content";
import Header from "../../components/common/header";

const MenuPesanan = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[40px] md:px-[50px] lg:px-[60px] xl:px-[60px] 2xl:px-[102px]">
      <Navbar />
      <Header title={"Order Menu"} onClick={() => window.history.back()} />
      <ContentMenuPesanan />
    </div>
  );
};

export default MenuPesanan;
