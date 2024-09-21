import React from "react";
import Navbar from "../components/specific/navbar";
// import HeaderEditAlamat from "../sections/edit_alamat/header";
import ContentEditAlamatCustomer from "../sections/edit_alamat/content";
// import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const EditAlamat = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[5vw] md:px-[8vw] lg:px-[6vw] xl:px-[5vw] 2xl:px-[5vw]">
      <Navbar />
      <Header title={"Edit Address"} onClick={() => window.history.back()} />
      <ContentEditAlamatCustomer />
      {/* <Footer /> */}
    </div>
  );
};

export default EditAlamat;
