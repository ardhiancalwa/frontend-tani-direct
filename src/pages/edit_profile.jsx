import React from "react";
import Navbar from "../components/specific/navbar";
// import HeaderEditProfile from "../sections/edit_profile/header";
import ContentEditProfile from "../sections/edit_profile/content";
// import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const EditProfile = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[5vw] md:px-[8vw] lg:px-[6vw] xl:px-[5vw] 2xl:px-[5vw]">
      <Navbar />
      <Header title={"Edit Profile"} onClick={() => window.history.back()} />
      <ContentEditProfile />
      {/* <Footer /> */}
    </div>
  );
};

export default EditProfile;
