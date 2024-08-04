import React from "react";
import NavbarPetani from "../components/specific/navbar_seller";
import HeaderUploadProduct from "../sections/upload_product/header";
import ContentUploadProduct from "../sections/upload_product/content";

const UploadProduct = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
      <NavbarPetani />
      <HeaderUploadProduct />
      <ContentUploadProduct />
    </div>
  );
};

export default UploadProduct;
