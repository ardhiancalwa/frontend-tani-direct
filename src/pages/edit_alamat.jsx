import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderEditAlamat from "../sections/edit_alamat/header";
import ContentEditAlamat from "../sections/edit_alamat/content";
import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const EditAlamat = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPembeli />
      <Header title={"Edit Address"} onClick={() => window.history.back()} />
      <ContentEditAlamat />
      {/* <Footer /> */}
    </div>
  );
};

export default EditAlamat;
