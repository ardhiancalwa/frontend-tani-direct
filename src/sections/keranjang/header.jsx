import React from "react";
import ArrowBack from "../../assets/images/arrow_back3.svg";

const HeaderCart = ({ item, onRemoveItem, isAnyChecked }) => {
  return (
    <div className="mt-8 md:mt-20 lg:mt-14">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row row-auto items-center ">
          <button
            className="flex items-center justify-center"
            onClick={() => window.history.back()}
          >
            <img
              src={ArrowBack}
              className="w-5 h-5 md:w-6 md:h-6 lg:w-[3vw] lg:h-[3vw] xl:w-[2.5vw] xl:h-[2.5vw] 2xl:w-[1.8vw] 2xl:h-[1.8vw]"
              alt="arrow back"
            />
          </button>
          <div className="w-2 lg:w-5"></div>
          <div className="font-inter font-semibold text-black text-[1rem] md:text-[1.5rem] lg:text-[1.8rem] 2xl:text-[35px]">
            Keranjang Belanja
          </div>
        </div>
        {isAnyChecked && (
          <div className="flex items-center 2xl:pr-5">
            <button
              onClick={() => onRemoveItem(item.produkID)}
              className="flex items-center justify-center text-white w-16 h-[28px] md:w-20 md:h-[30px] lg:w-[106px] lg:h-[44px] bg-red-600 hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-md 2xl:rounded-lg text-[12px] lg:text-[14px] 2xl:text-sm 2xl:px-5 py-2.5 text-center"
            >
              Hapus
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderCart;
