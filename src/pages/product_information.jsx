import React from "react";
import Produk from "../sections/product_information/content";
import NavbarPetani from "../components/specific/navbar_seller";
import Header from "../components/common/header";
import Footer from "../components/specific/footer";

const ProductIn = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPetani />
      <Header
        title={"Information of Product"}
        onClick={() => window.history.back()}
      />
      <Produk />
      <Footer />
    </div>
  );
};

export default ProductIn;
