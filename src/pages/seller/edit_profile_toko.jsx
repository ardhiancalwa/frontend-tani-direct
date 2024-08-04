import React from "react";
import NavbarPetani from "../../components/specific/navbar_seller";
import HeaderEditProfileToko from "../../sections/edit_profile_toko/header";
import ContentEditProfileToko from "../../sections/edit_profile_toko/content";
import Header from "../../components/common/header";

const EditProfileToko = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPetani />
      <Header
        title={"Edit Profile Seller"}
        onClick={() => window.history.back()}
      />
      <ContentEditProfileToko />
    </div>
  );
};

export default EditProfileToko;
