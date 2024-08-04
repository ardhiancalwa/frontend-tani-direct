import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderEditProfile from "../sections/edit_profile/header";
import ContentEditProfile from "../sections/edit_profile/content";
import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const EditProfile = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPembeli />
      <Header title={"Edit Profile"} onClick={() => window.history.back()} />
      <ContentEditProfile />
      {/* <Footer /> */}
    </div>
  );
};

export default EditProfile;
