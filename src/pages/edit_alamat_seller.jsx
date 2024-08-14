import React from "react";
import Navbar from "../components/specific/navbar";
// import HeaderEditAlamat from "../sections/edit_alamat/header";
import ContentEditAlamat from "../sections/edit_alamat_seller/content";
// import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const EditAlamatSeller = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[30px] md:px-[50px] lg:px-[60px] xl:px-[60px] 2xl:px-[110px]">
      <Navbar />
      <Header title={"Edit Address"} onClick={() => window.history.back()} />
      <ContentEditAlamat />
      {/* <Footer /> */}
    </div>
  );
};

export default EditAlamatSeller;
