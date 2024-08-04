import React from "react";
import NavbarPetani from "../../components/specific/navbar_seller";
import HeaderPetaniProfilePage from "../../sections/profile_seller/header";
import ContentPetaniProfilePage from "../../sections/profile_seller/content";
import Header from "../../components/common/header";

const PetaniProfilePage = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPetani />
      <Header title={"Profile Seller"} onClick={() => window.history.back()} />
      <ContentPetaniProfilePage />
    </div>
  );
};

export default PetaniProfilePage;
