import React from "react";
import GlobeImage from "../../assets/images/header-globe.png";

const HeaderHome = () => {
  return (
    <div className="bg-neutral">
      <div className="h-[40px] md:h-[80px] lg:h-[63px]"></div>
      <div className="flex row-auto w-full justify-between">
        <div className="flex flex-col">
          <div className="xl:w-[610px] xl:h-[255px] md:h-[200px] sm:w-[348px] sm:h-[156px] w-[164px] h-[78px] font-inter text-black font-bold text-start text-[22px] sm:text-[40px] md:text-[50px] xl:text-[70px] lg:leading-normal ">
            The future of agriculture is now
          </div>
          <div className="h-[35px] md:h-[45px] lg:h-[80px]"></div>
          <div className="flex row-auto items-start lg:pl-1">
            <button
              type="button"
              onClick={() => (window.location.href = "/aboutus")}
              className="w-[84px] h-[32px] md:w-[110px] md:h-[39px] lg:w-[140px] xl:w-[168px] lg:h-[53px] rounded-[5px] md:rounded-[7px] hover:shadow-lg lg:rounded-[10px] text-[5px] lg:text-[20px] font-inter text-primary hover:text-white border border-primary border-opacity-80 bg-opacity-80 hover:bg-primary focus:ring-2 focus:outline-none focus:ring-primary focus:ring-opacity-30 font-semibold text-sm lg:px-5 lg:py-2.5 text-center me-2 mb-2"
            >
              About Us
            </button>
          </div>
        </div>
        <img
          src={GlobeImage}
          className="lg:w-[244px] lg:h-[198px] sm:w-[244px] sm:h-[198px] w-[160px] h-[124px] 2xl:w-[488px] 2xl:h-[396px]"
          alt="Globe"
        />
      </div>
    </div>
  );
};

export default HeaderHome;
