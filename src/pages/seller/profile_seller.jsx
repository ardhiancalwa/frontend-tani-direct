import React from "react";
// import NavbarPetani from "../../components/specific/navbar_seller";
import Navbar from "../../components/specific/navbar";
// import HeaderPetaniProfilePage from "../../sections/profile_seller/header";
import ContentPetaniProfilePage from "../../sections/profile_seller/content";
import Header from "../../components/common/header";

const PetaniProfilePage = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[5vw] md:px-[8vw] lg:px-[6vw] xl:px-[5vw] 2xl:px-[5vw]">
      <Navbar />
      <div className="2xl:ml-14 mt-[3vw] w-full md:mt-[8.5vw] lg:mt-[4vw] xl:mt-[2.5vw] 2xl:mt-[2.1vw] fixed bg-white z-50">
        <div className="flex flex-row row-auto items-center py-3">
          <div className="font-inter font-semibold text-black text-[1rem] md:text-[1.4rem] lg:text-[2rem]">
            Profile Seller
          </div>
        </div>
      </div>{" "}
      <ContentPetaniProfilePage />
    </div>
  );
};

export default PetaniProfilePage;
