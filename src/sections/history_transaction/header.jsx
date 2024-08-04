import React from "react";

import ArrowBack from "../../assets/images/arrow-back.svg";

const HeaderHistoryTransaction = () => {
  return (
    <div>
      <div className="h-[20px] md:h-[50px] lg:h-[50px] "></div>{" "}
      <div className="flex flex-row row-auto items-center ">
        <button
          className="flex items-center justify-center border border-black rounded-full w-6 h-6 lg:w-10 lg:h-10"
          onClick={() => window.history.back()}
        >
          <img
            src={ArrowBack}
            className="w-3 h-3 lg:w-4 lg:h-4"
            alt="arrow back"
          />
        </button>
        <div className="w-2 lg:w-5"></div>
        <div className="font-inter font-semibold text-black text-[16px] md:text-[20px] lg:text-3xl">
          History Transaction
        </div>
      </div>
    </div>
  );
};

export default HeaderHistoryTransaction;
