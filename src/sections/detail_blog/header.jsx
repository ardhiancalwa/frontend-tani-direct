import React from "react";

import ArrowBack from "../../assets/images/arrow_back3.svg";

const HeaderDetailBlog = () => {
  return (
    <div>
      <div className="h-[30px] md:h-[80px] lg:h-[70px]"></div>
      <div className="flex flex-row row-auto items-center">
        <button
          className="flex items-center justify-center"
          onClick={() => window.history.back()}
        >
          <img
            src={ArrowBack}
            className="w-5 h-5 lg:w-[45px] lg:h-[45px]"
            alt="arrow back"
          />
        </button>
        <div className="w-5 md:w-3"></div>
        <div className="flex flex-col items-start">
          <div className="font-inter font-semibold text-black text-[16px] md:text-[20px] lg:text-[30px] text-start">
            Musim El Nino: Pengancam Harga Pasar Indonesia
          </div>
          <div className="font-inter font-medium text-gray text-[8px] md:text-[10px] lg:text-[15px]">
            24 June 2024 ・6 min
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetailBlog;
