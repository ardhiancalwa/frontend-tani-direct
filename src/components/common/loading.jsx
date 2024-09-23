import React from "react";
import Logo from "../../assets/images/logo2.png";

const LoadingScreen = () => {
  return (
    // <div className="flex items-center justify-center col-span-4 h-[600px]">
    //   <div class="border-greenLight h-20 w-20 animate-spin rounded-full border-8 border-t-primary" />
    // </div>
    <div>
      <div class="relative flex justify-center items-center h-[600px]">
        <div class="absolute animate-spin rounded-full h-20 w-20 lg:h-32 lg:w-32 border-t-[4px] border-b-[4px] border-primary border-opacity-60"></div>
        <img src={Logo} className="animate-pulse h-16 w-16 lg:w-24 lg:h-24" alt="logo" />
      </div>
    </div>
  );
};

export default LoadingScreen;
