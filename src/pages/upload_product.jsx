import React from "react";
// import NavbarPetani from "../components/specific/navbar_seller";
import Navbar from "../components/specific/navbar";
// import HeaderUploadProduct from "../sections/upload_product/header";
import ContentUploadProduct from "../sections/upload_product/content";
import Header from "../components/common/header";

const UploadProduct = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[30px] md:px-[50px] lg:px-[60px] xl:px-[60px] 2xl:px-[110px]">
      <Navbar />
      <Header title={"Upload Product"} onClick={() => window.history.back()} />
      <ContentUploadProduct />
    </div>
  );
};

export default UploadProduct;
