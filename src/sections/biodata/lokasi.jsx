import React from "react";
import peta from "../../assets/images/basemap.png";

const Lokasi = () => {
  return (
    <div className="w-full p-2 py-4 min-h-screen md:flex flex-col  items-center   ">
      <div
        className="w-full text-right ml-5
      "
      >
        <button>
          <p className="font-semibold  lg:text-[1.2rem] ">Skip</p>
        </button>
      </div>
      <div className="flex justify-between md:w-[600px] lg:w-full  md:px-5 md:gap-2 lg:gap-0 items-center mt-5 xl:px-4">
        <h2 className="font-bold text-[15px] md:text-[20px] xl:text-[30px]  lg:text-[1.5rem]">
          Step 1
        </h2>

        <span className="w-[45px]  md:w-[150px]  lg:w-[250px] sm:w-[160px] 2xl:w-[500px] xl:w-[400px] h-[1px] bg-black  "></span>
        <span className="bg-[#E6ECE9] py-[7px]  border-[1.8px] border-[#33654E] rounded-[10px] px-[11px]">
          <h2 className="font-bold text-[14px] xl:text-[1.5rem] lg:text-[1.1rem] ">
            Step 2
          </h2>
        </span>
        <span className="w-[45px]  md:w-[150px] lg:w-[250px] sm:w-[160px] 2xl:w-[500px] xl:w-[400px] h-[1px] bg-black  "></span>
        <h2 className="font-bold text-[15px] md:text-[20px] xl:text-[30px]  lg:text-[1.5rem]">
          Step 3
        </h2>
      </div>
      <div className="mt-6 flex flex-col justify-center items-center gap-2">
        <h2 className="text-[25px] font-bold w-[329px] md:w-[429px] md:text-[40px] md:hidden ">
          Choose Production Location
        </h2>
        <h2 className="text-[25px] font-bold w-[329px] md:w-[429px] md:text-[40px] hidden md:block xl:text-[60px] xl:w-auto ">
          Choose Your Location
        </h2>
        <p className="text-[14px] text-black font-semibold  md:hidden">
          You can always change them later!
        </p>
      </div>

      <div className="md:w-[522px] xl:w-[579px] md:h-auto md:p-5 xl:p-8 md:flex-col md:flex md:justify-start md:items-start md:gap-1 md:border md:border-black md:rounded-xl md:mt-7 ">
        {/* INPUT */}
        <div className="flex flex-col justify-normal items-start gap-2 w-full pr-2 mt-5 md:mt-0 ">
          <label
            htmlFor=""
            className="text-[15px] font-semibold  md:text-[22px]"
          >
            Provinsi
          </label>
          <input
            type="text"
            className="border border-black p-2 h-[34px] md:h-[43px] w-full  border-opacity-50 rounded-md "
          />
        </div>
        {/* INPUT */}
        <div className="flex flex-col justify-normal items-start gap-2 w-full pr-2 mt-5 ">
          <label
            htmlFor=""
            className="text-[15px] font-semibold  md:text-[22px]"
          >
            Kota/Kabupaten
          </label>
          <input
            type="text"
            className="border border-black p-2 h-[34px] md:h-[43px] w-full  border-opacity-50 rounded-md "
          />
        </div>
        {/* INPUT */}
        <div className="flex flex-col justify-normal items-start  w-full pr-2 mt-5 gap-2 ">
          <label
            htmlFor=""
            className="text-[15px] md:text-[22px] font-semibold"
          >
            Kecamatan
          </label>
          <input
            type="text"
            className="border border-black p-2 h-[34px] md:h-[43px] w-full  border-opacity-50 rounded-md "
          />
        </div>
        {/* INPUT */}
        <div className="flex flex-col justify-normal items-start  w-full pr-2 mt-5 gap-2 ">
          <label
            htmlFor=""
            className="text-[15px] font-semibold  md:text-[22px] "
          >
            Nama Jalan
          </label>
          <input
            type="text"
            className="border border-black p-2 h-[34px] md:h-[43px] w-full  border-opacity-50 rounded-md "
          />
        </div>
        {/* peta */}
        <div className="flex flex-col justify-normal items-start mt-5 gap-2">
          <h2 className="text-[15px] font-semibold md:text-[22px] ">
            Peta Lokasi Produk di Hasilkan
          </h2>
          <img
            src={peta}
            alt=""
            className="w-[306px] h-[164px] md:w-[488px] md:h-[204px] xl:w-[518px] xl:h-[256px] "
          />
        </div>
      </div>
      {/* NEXT */}
      <div className="w-full  mt-10  md:w-[563px]">
        <button className="w-full bg-[#002C18] p-[10px] lg:py-3 text-white rounded-md font-semibold flex justify-center items-center mb-18 lg:mb-10 ">
          <p className="  text-[15px] md:text-[30px]">Next</p>
        </button>
      </div>
    </div>
  );
};

export default Lokasi;
