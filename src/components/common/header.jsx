import React from "react";

import ArrowBack from "../../assets/images/arrow_back3.svg";

const Header = ({ onClick, title }) => {
  return (
    <div>
      <div className="h-[40px] md:h-[80px] lg:h-[70px] "></div>{" "}
      <div className="flex flex-row row-auto items-center py-3">
        <button className="flex items-center justify-center active:scale-95" onClick={onClick}>
          <img
            src={ArrowBack}
            className="w-5 h-5 lg:w-[40px] lg:h-[40px]"
            alt="arrow back"
          />
        </button>
        <div className="w-2 lg:w-5"></div>
        <div className="font-inter font-semibold text-black text-[16px] md:text-[20px] lg:text-[45px]">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Header;
