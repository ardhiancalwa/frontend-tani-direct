import React from "react";

import ArrowBack from "../../assets/images/arrow_back3.svg";

const HeaderUserPayment = () => {
  const handleBack = () => {
    // Clear checkedProducts from local storage
    localStorage.removeItem("checkedProducts");
    // Navigate back to the previous page
    window.history.back();
  };
  return (
    <div>
      <div className="h-[20px] md:h-[63px] "></div>
      <div className="flex flex-row items-center">
        <button
          className="flex items-center justify-center"
          onClick={handleBack}
        >
          <img
            src={ArrowBack}
            className="w-5 h-5 lg:w-[45px] lg:h-[45px]"
            alt="arrow back"
          />
        </button>
        <div className="w-2 lg:w-5"></div>
        <div className="flex flex-col items-start">
          <div className="font-inter text-[16px] lg:text-[25px] font-semibold text-black ">
            Product Information & Review
          </div>
          <div className="hidden lg:flex font-inter font-medium text-black lg:text-[15px] text-start">
            By placing your order, you agree to TaniDirect in’s Privacy and
            Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUserPayment;
