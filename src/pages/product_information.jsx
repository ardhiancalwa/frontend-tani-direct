import React from "react";
import Produk from "../sections/product_information/content";
// import NavbarPetani from "../components/specific/navbar_seller";
import Navbar from "../components/specific/navbar";
import Header from "../components/common/header";
import Footer from "../components/specific/footer";

const ProductIn = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[30px] md:px-[50px] lg:px-[60px] xl:px-[60px] 2xl:px-[110px]">
      <Navbar />
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
