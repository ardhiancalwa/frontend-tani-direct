import React from "react";
import NavbarPetani from "../../components/specific/navbar_seller";
import HeaderMenuPesanan from "../../sections/menu_pesanan/header";
import ContentMenuPesanan from "../../sections/menu_pesanan/content";
import Header from "../../components/common/header";

const MenuPesanan = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPetani />
      <Header title={"Order Menu"} onClick={() => window.history.back()} />
      <ContentMenuPesanan />
    </div>
  );
};

export default MenuPesanan;
