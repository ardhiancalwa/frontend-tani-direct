import React from "react";

import ArrowBack from "../../assets/images/arrow_back3.svg";

const Header = ({ onClick, title }) => {
  return (
    <div className="mt-[3vw] md:mt-[8.5vw] lg:mt-[4vw] xl:mt-[2.5vw] 2xl:mt-[2vw]">
      <div className="flex flex-row row-auto items-center py-3">
        <button className="flex items-center justify-center active:scale-95" onClick={onClick}>
          <img
            src={ArrowBack}
            className="w-5 h-5 md:w-6 md:h-6 lg:w-[3vw] lg:h-[3vw] 2xl:w-[2vw] 2xl:h-[2vw]"
            alt="arrow back"
          />
        </button>
        <div className="w-2 lg:w-5"></div>
        <div className="font-inter font-semibold text-black text-[1rem] md:text-[1.4rem] lg:text-[2rem]">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Header;
