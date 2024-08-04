import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import ContentProfile from "../sections/profile/content";
import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const ProfilePage = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPembeli />
      <Header title={"Profile"} onClick={() => window.history.back()} />
      <ContentProfile />
      <Footer />
    </div>
  );
};

export default ProfilePage;
