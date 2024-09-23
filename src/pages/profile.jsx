import React from "react";
import Navbar from "../components/specific/navbar";
import ContentProfile from "../sections/profile/content";
// import Footer from "../components/specific/footer";

const ProfilePage = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[5vw] md:px-[8vw] lg:px-[6vw] xl:px-[5vw] 2xl:px-[2vw]">
      <Navbar />
      <div className="2xl:ml-14 mt-[3vw] w-full md:mt-[8.5vw] lg:mt-[4vw] xl:mt-[2.5vw] 2xl:mt-[2vw] fixed bg-white z-50">
        <div className="flex flex-row row-auto items-center py-3">
          <div className="font-inter font-semibold text-black text-[1rem] md:text-[1.4rem] lg:text-[2rem]">
            Profile
          </div>
        </div>
      </div>
      <ContentProfile />
      {/* <Footer /> */}
    </div>
  );
};

export default ProfilePage;
