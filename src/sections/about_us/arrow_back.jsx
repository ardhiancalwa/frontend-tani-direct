import React from "react";

import ArrowBackIcon from "../../assets/images/arrow_back2.svg";

const ArrowBack = () => {
  return (
    <div>
      <div className="h-[20px] md:h-[50px] lg:h-[67px] "></div>
      <button
        className="flex items-center justify-center"
        onClick={() => window.history.back()}
      >
        <img
          src={ArrowBackIcon}
          className="w-3 h-3 lg:w-[45px] lg:h-[45px]"
          alt="arrow back"
        />
      </button>
    </div>
  );
};

export default ArrowBack;
