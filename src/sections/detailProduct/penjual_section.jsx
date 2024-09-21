import React from "react";

import ChatIcon from "../../assets/images/chat.svg";

const PenjualSection = ({seller}) => {
  const number = Math.floor(Math.random() * 59) + 1;
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";
  return (
    <div className="mt-8 2xl:mt-14">
      <div className="flex flex-row row-auto w-full border-t-[1px] border-b-[1px] md:py-[2vw] py-[3vw] border-gray border-opacity-50 items-center justify-between">
        <div className="flex flex-row row-auto">
          <img
            src={`${imageUrl}${seller?.image_petani}`}
            className="w-[12vw] h-[12vw] md:w-[7vw] md:h-[7vw] lg:w-[8vw] lg:h-[8vw] xl:w-[6vw] xl:h-[6vw] 2xl:w-[6.5vw] 2xl:h-[6.5vw] rounded-full object-cover"
            alt="profile_penjual"
          />
          <div className="flex flex-col items-start justify-center pl-2 md:pl-4">
            <div className="font-inter font-semibold text-start text-black text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.5rem] 2xl:text-[2rem]">
              {seller?.nama_petani}
            </div>
            <div className="font-inter font-semibold text-gray text-opacity-50 text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1.2rem]">
              Aktif {number} Menit yang lalu
            </div>
          </div>
        </div>
        <button
          className="bg-primary rounded-md lg:rounded-xl w-[22vw] h-[6vw] md:w-[18vw] md:h-[5vw] lg:w-[180px] lg:h-[50px] 2xl:w-[240px] 2xl:h-[64px] "
          onClick={() => (window.location.href = "/chat")}
        >
          <div className="flex flex-row row-auto items-center justify-between px-2 md:px-3 2xl:px-6">
            <img
              src={ChatIcon}
              className="w-[3.5vw] h-[3.5vw] md:w-[2.8vw] md:h-[2.8vw] lg:w-[2.5vw] lg:h-[2.5vw] xl:w-[2vw] xl:h-[2vw] "
              alt="icon_chat"
            />
            <div className="text-[0.6rem] md:text-[0.88rem] lg:text-[1.2rem] 2xl:text-[1.5rem] font-medium font-inter text-white ">
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
