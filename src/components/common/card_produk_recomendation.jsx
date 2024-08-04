import React from "react";
import imageDummy from "../../assets/images/sayur.jpg";

const CardProductRecomendations = ({ title, isActive }) => {
  const cardClass = isActive
    ? "w-[100px] h-[85px] md:w-[151px] md:h-[122px] lg:w-[300px] lg:h-[245px] scale-100 transition-transform duration-300 ease-in-out"
    : "w-[84px] h-[67px] md:w-[130px] md:h-[100px] lg:w-[226px] lg:h-[200px] scale-75 transition-transform duration-300 ease-in-out";

  const borderClass = isActive
    ? "h-[190px] lg:w-[350px] lg:h-[474px]"
    : "h-[165px] w-[95px] lg:w-[276px] lg:h-[397px]";

  return (
    <div className="px-[5px] md:px-[14px] lg:px-10">
      <div
        className={`w-[120px] md:w-[181px] lg:w-[300px] ${borderClass} bg-white border border-gray border-opacity-20 rounded-md lg:rounded-xl`}
      >
        <div className="flex items-center justify-center">
          <img
            src={imageDummy}
            className={`p-1 md:p-[15px] lg:p-6 ${cardClass}`}
            alt="sayur"
          />
        </div>
        <div className="flex flex-col p-1 md:p-[15px] lg:p-[20px]">
          <div className="font-bold w-[85px] h-[20px] md:w-[151px] md:h-[24px] lg:w-[300px] lg:h-[46px]  text-black font-inter text-start text-[7px] md:text-[10px] lg:text-[24px]">
            {title}
          </div>
          <div className="py-[5px] lg:py-[7px]">
            <div className="flex items-center justify-center bg-greenLight rounded-sm lg:rounded-md w-[36px] h-[14px] md:w-[40px] md:h-[15px] lg:w-[58px] lg:h-[26px]">
              <div className="font-inter font-normal text-primary text-[6px] md:text-[8px] lg:text-[12px]">
                Quality
              </div>
            </div>
          </div>
          <div className="w-[85px] h-[31px] md:w-[130px] md:h-[42px] lg:w-[226px] lg:h-[64px]  text-start font-inter font-normal text-[6px] md:text-[8px] lg:text-[14px]">
            Produk (x) ini memiliki keunggulan dalam (x) menurut (x) pengguna
            dan telah terjual (x) dalam kurung waktu x minggu
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductRecomendations;
