import React from "react";
import Navbar from "../components/specific/navbar";
import ContentProfile from "../sections/profile/content";
// import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const ProfilePage = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[10px] md:px-[50px] lg:px-[60px] xl:px-[60px] 2xl:px-[102px]">
      <Navbar />
      <Header title={"Profile"} onClick={() => window.history.back()} />
      <ContentProfile />
      {/* <Footer /> */}
    </div>
  );
};

export default ProfilePage;
