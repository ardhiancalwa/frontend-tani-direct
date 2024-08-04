import React from "react";
import elips from "../../assets/images/elips.png";

import circle from "../../assets/images/circle.png";

const Avatar = () => {
  return (
    <div className="w-full p-2 py-4 min-h-screen flex flex-col justify-between items-center   ">
      <div>
        <div
          className="w-full text-right ml-3
      "
        >
          <button>
            <p className="font-semibold  lg:text-[1.2rem] ">Skip</p>
          </button>
        </div>
        <div className="flex justify-between md:w-full lg:w-full  md:px-5 md:gap-2 lg:gap-0 items-center mt-5 xl:px-4">
          <h2 className="font-bold text-[15px] md:text-[20px] xl:text-[30px]  lg:text-[1.5rem]">
            Step 1
          </h2>

          <span className="w-[65px]  md:w-[170px]  lg:w-[250px] sm:w-[160px] 2xl:w-[430px] xl:w-[400px] h-[1px] bg-black  "></span>
          <span className="bg-[#E6ECE9] py-[7px]  border-[1.8px] border-[#33654E] rounded-[10px] px-[11px]">
            <h2 className="font-bold text-[14px] xl:text-[1.5rem] lg:text-[1.1rem] ">
              Step 2
            </h2>
          </span>
          <span className="w-[65px]  md:w-[170px] lg:w-[250px] sm:w-[160px] 2xl:w-[430px] xl:w-[400px] h-[1px] bg-black  "></span>
          <h2 className="font-bold text-[15px] md:text-[20px] xl:text-[30px]  lg:text-[1.5rem]">
            Step 3
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="mt-4 md:mt-5 font-bold text-[28px] md:text-[35px] lg:text-[50px] ">
            Choose Your Avatar
          </h1>
          <div className="mt-[18px] md:mt[25px] flex flex-wrap items-center justify-center gap-7 lg:gap-12 md:w-[655px] lg:w-full  ">
            {/* profle img */}
            <div>
              <img
                src={elips}
                alt=""
                className=" w-[89px] h-[87px] sm:h-[135px] sm:w-[135px] lg:w-[177px] lg:h-[177px] "
              />
            </div>
            {/* profle img */}
            <div>
              <img
                src={elips}
                alt=""
                className="sm:h-[135px] w-[89px] h-[87px]  sm:w-[135px] lg:w-[177px] lg:h-[177px] "
              />
            </div>
            {/* profle img */}
            <div>
              <img
                src={elips}
                alt=""
                className="sm:h-[135px] w-[89px] h-[87px]  sm:w-[135px] lg:w-[177px] lg:h-[177px] "
              />
            </div>
            {/* profle img */}
            <div>
              <img
                src={elips}
                alt=""
                className="sm:h-[135px] w-[89px] h-[87px]  sm:w-[135px] lg:w-[177px] lg:h-[177px] "
              />
            </div>
            {/* profle img */}
            <div>
              <img
                src={elips}
                alt=""
                className="sm:h-[135px] w-[89px] h-[87px]  sm:w-[135px] lg:w-[177px] lg:h-[177px] "
              />
            </div>
            {/* profle img */}
            <div>
              <img
                src={elips}
                alt=""
                className="sm:h-[135px] w-[89px] h-[87px]  sm:w-[135px] lg:w-[177px] lg:h-[177px] "
              />
            </div>
          </div>
        </div>
        {/* UPLOAD PHOTO */}
        <div className="mt-5 md:mt-6 flex flex-col justify-center items-center gap-5 lg:gap-8">
          <h4 className="text-[1.1rem] font-[500]  md:text-[20px] lg:text-[2rem] ">
            or add your own photo
          </h4>
          <div className=" ">
            <img src={circle} alt="" className="sm:w-[136px] sm:h-[136px] " />
          </div>
          <h4 className="text-[0.9rem] font-[500] lg:text-[1.2rem] ">
            Only JPG, JPEG or PNG files with max size of 1 MB
          </h4>
        </div>
      </div>
      {/* NEXT */}
      <div className="w-full px-5 mt-10 sm:mt-6 xl:w-[563px]">
        <button className="w-full bg-[#002C18] p-2 lg:py-3 text-white rounded-md font-semibold flex justify-center items-center mb-18 lg:mb-10 ">
          <p className="text-[15px] md:text-[30px]">Next</p>
        </button>
      </div>
    </div>
  );
};

export default Avatar;
