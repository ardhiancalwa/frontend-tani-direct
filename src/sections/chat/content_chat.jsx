import React from "react";

import ForwardIcon from "../../assets/images/forward.svg";
import ProfilePembeli from "../../assets/images/profile_chat_pembeli.png";
import ProfilePenjual from "../../assets/images/profile_chat.png";
import TextKeyboard from "./textKey";

const ContentChat = () => {
  return (
    <div>
      <div className="flex flex-row row-auto items-end justify-end mt-5">
        <button>
          <img
            src={ForwardIcon}
            className="w-5 h-5 lg:w-8 lg:h-8" 
            alt="forward"
          />
        </button>
        <div className="w-2 lg:w-5"></div>
        <div
          className="flex flex-row row-auto border border-gray border-opacity-50 "
          style={{ borderRadius: 10 }}
        >
          <div className="p-2 lg:p-6 text-xs text-start md:text-[14px] leading-normal  lg:text-xl font-medium font-inter max-w-52 md:max-w-96 lg:max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Montes semper mauris est
            mollis netus amet ultrices. Turpis arcu ut dolor. lorem40
          </div>
          <div className="bg-primary w-2 rounded-r-full"></div>
        </div>
        <div style={{ width: 20 }}></div>
        <div>
          <img
            src={ProfilePembeli}
            className="w-9 h-9 lg:w-10 lg:h-10"
            alt="profile_pembeli"
          />
        </div>
      </div>
      <div className="h-7 lg:h-6"></div>?<div className="h-7 lg:h-6"></div>
      <div className="flex flex-row row-auto items-end justify-end">
        <button>
          <img
            src={ForwardIcon}
            className="w-5 h-5 lg:w-8 lg:h-8"
            alt="forward"
          />
        </button>
        <div className="w-2 lg:w-5"></div>
        <div
          className="flex flex-row row-auto border border-gray border-opacity-50 "
          style={{ borderRadius: 10 }}
        >
          <div className="p-2 lg:p-6 text-xs md:text-[14px] leading-normal text-start lg:text-xl font-medium font-inter max-w-64 lg:max-w-2xl">
            thank you
          </div>
          <div className="bg-primary w-2 rounded-r-full"></div>
        </div>
        <div style={{ width: 20 }}></div>
        <div>
          <img
            src={ProfilePembeli}
            className="w-9 h-9 lg:w-10 lg:h-10"
            alt="profile_pembeli"
          />
        </div>
      </div>
      <TextKeyboard />
    </div>
  );
};

export default ContentChat;
