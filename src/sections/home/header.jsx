import React from "react";
import GlobeImage from "../../assets/images/header-globe.png";

const HeaderHome = () => {
  return (
    <div className="bg-neutral">
      <div className="flex row-auto w-full justify-between mt-5 md:mt-20 lg:mt-10 xl:mt-14 2xl:mt-16">
        <div className="flex flex-col mr-[5vw] 2xl:mr-[20vw]">
          <div className="font-inter text-black font-bold text-start text-2xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-[6rem] lg:leading-normal ">
            The future of agriculture is now
          </div>
          <div className="flex row-auto items-start lg:pl-1 mt-5 md:mt-8 lg:mt-10 xl:mt-8 2xl:mt-20">
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
          className="w-[45vw] h-[40vw] md:w-[35vw] md:h-[30vw] lg:w-[35vw] lg:h-[30vw] xl:w-[30vw] xl:h-[25vw] 2xl:w-[30vw] 2xl:h-[25vw]"
          alt="Globe"
        />
      </div>
    </div>
  );
};

export default HeaderHome;
