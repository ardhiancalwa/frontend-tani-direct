import React from "react";
// import NavbarPetani from "../../components/specific/navbar_seller";
import Navbar from "../../components/specific/navbar";
// import HeaderPetaniProfilePage from "../../sections/profile_seller/header";
import ContentPetaniProfilePage from "../../sections/profile_seller/content";
import Header from "../../components/common/header";

const PetaniProfilePage = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[30px] md:px-[50px] lg:px-[60px] xl:px-[60px] 2xl:px-[102px]">
      <Navbar />
      <Header title={"Profile Seller"} onClick={() => window.history.back()} />
      <ContentPetaniProfilePage />
    </div>
  );
};

export default PetaniProfilePage;
