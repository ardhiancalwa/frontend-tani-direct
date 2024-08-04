import React from "react";

import ArrowBack from "../../assets/images/arrow-back.svg";
import ProfileChat from "../../assets/images/profile_chat.png";
import OnlineIcon from "../../assets/images/online_icon.svg";

const HeaderChat = () => {
  return (
    <div>
      <div style={{ height: 20 }}></div>
      <div className="hidden lg:flex flex-row row-auto">
        <button
          className="flex items-center justify-center border border-black rounded-full"
          style={{ width: 40, height: 40 }}
          onClick={() => window.history.back()}
        >
          <img src={ArrowBack} alt="arrow back" />
        </button>
        <div style={{ width: 12 }}></div>
        <div className="w-full">
          <div className="flex flex-col col-auto">
            <div className="flex flex-row row-auto">
              <img src={ProfileChat} alt="profile_chat" />
              <div style={{ width: 16 }}></div>
              <div className="flex flex-col">
                <div
                  className="font-inter font-medium text-black"
                  style={{ fontSize: 20 }}
                >
                  Penjual Sayur
                </div>
                <div className="flex flex-row row-auto">
                  <img src={OnlineIcon} alt="online icon" />
                  <div style={{ width: 8 }}></div>
                  <div
                    className="font-inter font-semibold text-black"
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
