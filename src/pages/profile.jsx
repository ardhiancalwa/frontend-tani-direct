import React from "react";
import Navbar from "../components/specific/navbar";
import ContentProfile from "../sections/profile/content";
// import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const ProfilePage = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[5vw] md:px-[8vw] lg:px-[6vw] xl:px-[5vw] 2xl:px-[5vw]">
      <Navbar />
      <Header title={"Profile"} onClick={() => window.history.back()} />
      <ContentProfile />
      {/* <Footer /> */}
    </div>
  );
};

export default ProfilePage;
