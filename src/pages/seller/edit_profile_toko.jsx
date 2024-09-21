import React from "react";
// import NavbarPetani from "../../components/specific/navbar_seller";
import Navbar from "../../components/specific/navbar";
import HeaderEditProfileToko from "../../sections/edit_profile_toko/header";
import ContentEditProfileToko from "../../sections/edit_profile_toko/content";
import Header from "../../components/common/header";

const EditProfileToko = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[5vw] md:px-[8vw] lg:px-[6vw] xl:px-[5vw] 2xl:px-[5vw]">
      <Navbar />
      <Header
        title={"Edit Profile Seller"}
        onClick={() => window.history.back()}
      />
      <ContentEditProfileToko />
    </div>
  );
};

export default EditProfileToko;
