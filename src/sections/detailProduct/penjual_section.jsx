import React from "react";

import ProfilePenjual from "../../assets/images/profile_penjual.png";
import ChatIcon from "../../assets/images/chat.svg";

const PenjualSection = () => {
  return (
    <div>
      <div className="h-[0px]  md:h-[52px]"></div>
      <div className="flex flex-row row-auto w-[350px] md:w-full border-t-[1px] border-b-[1px] md:py-[20px] py-[10px] border-gray border-opacity-50 items-center justify-between">
        <div className="flex flex-row row-auto">
          <img
            src={ProfilePenjual}
            className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] lg:w-[100px] lg:h-[100px] "
            alt="profile_penjual"
          />
          <div className="flex flex-col items-start justify-center  pl-8">
            <div className="font-inter font-semibold text-start text-black text-[12px] md:text-[16px] lg:text-[28px]">
              Yanto.Co
            </div>
            <div className="font-inter font-semibold text-gray text-opacity-50 text-[10px] md:text-[12px] lg:text-[20px]">
              Aktif 10 Menit yang lalu
            </div>
          </div>
        </div>
        <button
          className="bg-primary rounded-md lg:rounded-xl w-[80px] h-[26px] md:w-[100px] md:h-[30px] lg:w-[240px] lg:h-[64px] "
          onClick={() => (window.location.href = "/chat")}
        >
          <div className="flex flex-row row-auto items-center justify-center">
            <img
              src={ChatIcon}
              className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] lg:w-[24px] lg:h-[24px] "
              alt="icon_chat"
            />
            <div style={{ width: 10 }}></div>
            <div className="text-[8px] md:text-[10px] lg:text-[20px] font-medium font-inter text-white ">
              Chat Penjual
            </div>
          </div>
        </button>
      </div>
      <div className="lg:h-[52px] "></div>
    </div>
  );
};

export default PenjualSection;
