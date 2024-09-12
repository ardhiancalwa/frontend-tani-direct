import React from "react";

import ArrowBack from "../../assets/images/arrow-back.svg";
import ProfileChat from "../../assets/images/profile_chat.png";
import OnlineIcon from "../../assets/images/online_icon.svg";

const HeaderChat = () => {
  return (
    <div>
      <div style={{ height: 20 }}></div>
      <div className="hidden md:flex flex-row row-auto">
        <div className="md:my-4 lg:my-1">
        <button
          className="flex items-center justify-center border-2 border-black rounded-full lg:p-[4px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px]"
          onClick={() => window.history.back()}
        >
          <img src={ArrowBack} 
          className="w-3 h-3 lg:w-16 lg:h-8" 
          alt="arrow back" />
        </button>
        </div>
        <div className="w-5"></div>
        <div className="w-full">
          <div className="flex flex-col col-auto"> 
            <div className="md:pl-3 lg:pl-5 flex flex-row row-auto">
              <img src={ProfileChat} alt="profile_chat" />
              <div style={{ width: 16 }}></div>
              <div className="flex flex-col">
                <div
                  className="font-inter font-medium text-black text-[20px]"
                >
                  Penjual Sayur
                </div>
                <div className="flex flex-row row-auto">
                  <img src={OnlineIcon} alt="online icon" />
                  <div style={{ width: 8 }}></div>
                  <div
                    className="font-inter font-semibold opacity-50 text-black"
                    style={{ fontSize: 12 }}
                  >
                    Online
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: 15 }}></div>
            <hr className="border-black border-opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderChat;
