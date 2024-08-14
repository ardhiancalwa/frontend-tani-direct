import React from "react";
import petani from "../../assets/images/farmer.png";

const Bio = () => {
  return (
    <div className="w-full p-2 py-4 min-h-screen flex flex-col justify-between items-center  ">
      <div className="lg:flex flex-col justify-center items-center ">
        {" "}
        <div
          className="w-full text-right ml-5
      "
        >
          <button>
            <p className="font-semibold  lg:text-[1.2rem]  ">Skip</p>
          </button>
        </div>
        <div className="flex justify-between md:w-[600px]  lg:w-full  md:px-5 md:gap-2 2xl:gap-4 lg:gap-2 items-center mt-5 xl:px-4">
          <h2 className="font-bold text-[15px] md:text-[20px] xl:text-[30px]  lg:text-[1.5rem]">
            Step 1
          </h2>

          <span className="w-[60px]  md:w-[150px]  lg:w-[230px] sm:w-[160px] 2xl:w-[410px] xl:w-[390px] h-[1px] bg-black  "></span>

          <h2 className="font-bold text-[15px] md:text-[20px] xl:text-[30px] lg:text-[1.5rem] ">
            Step 2
          </h2>

          <span className="w-[60px]  md:w-[150px] lg:w-[230px] sm:w-[160px] 2xl:w-[410px] xl:w-[390px] h-[1px] bg-black  "></span>

          <span className="bg-[#E6ECE9] py-[7px]  border-[1.8px] border-[#33654E] rounded-[10px] px-[11px]">
            {" "}
            <h2 className="font-bold text-[14px]  xl:text-[1.5rem]  lg:text-[1.1rem]">
              Step 3
            </h2>
          </span>
        </div>
        <div className="mt-6 flex flex-col justify-center items-center gap-2 ">
          <h2 className="text-[25px] font-bold w-[329px] md:w-[429px] md:text-[40px] lg:w-full xl:text-[60px] ">
            Tells About Yourself
          </h2>

          <p className="text-[12px] text-black font-semibold  md:hidden">
            You can always change them later!
          </p>
        </div>
        <div className="w-full text-center justify-center flex items-center mt-5">
          {" "}
          <img
            src={petani}
            alt=""
            className="w-[165px] h-[165px] md:w-[271px] md:h-[289px]  "
          />
        </div>
        <div>
          <h2 className="text-[15px] font-bold text-start mt-5 md:text-[28px] ">
            Profil Singkat Petani
          </h2>
          <textarea
            type="text"
            className="w-[309px] h-[138px] text-[20px] font-inter md:w-[604px] md:h-[239px]  size-9 border block placehorder:text-start relative placehorder:text-gray-500 placeholder:w-auto placeholder:h-auto border-black border-opacity-50 rounded-md mt-4 p-2 "
            placeholder="Narasi singkat "
          />
        </div>
      </div>
      <div className="w-full  mt-10  md:w-[563px]">
        <button className="w-full bg-[#002C18] p-[10px] lg:py-3 text-white rounded-md font-semibold flex justify-center items-center mb-18 lg:mb-10 " onClick={() => window.location.href="/home"}>
          <p className="  text-[15px] md:text-[30px]">Next</p>
        </button>
      </div>
    </div>
  );
};

export default Bio;
