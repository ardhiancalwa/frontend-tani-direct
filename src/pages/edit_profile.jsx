import React from "react";
import Navbar from "../components/specific/navbar";
// import HeaderEditProfile from "../sections/edit_profile/header";
import ContentEditProfile from "../sections/edit_profile/content";
// import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const EditProfile = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[30px] md:px-[50px] lg:px-[60px] xl:px-[60px] 2xl:px-[110px]">
      <Navbar />
      <Header title={"Edit Profile"} onClick={() => window.history.back()} />
      <ContentEditProfile />
      {/* <Footer /> */}
    </div>
  );
};

export default EditProfile;
