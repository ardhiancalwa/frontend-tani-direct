import React from "react";
import ArrowBack from "../../assets/images/arrow_back3.svg";

const HeaderCart = ({ item, onRemoveItem, isAnyChecked }) => {
  return (
    <div>
      <div className="h-[30px] md:h-[70px] lg:h-[70px] "></div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row row-auto items-center ">
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
          <div className="w-2 lg:w-5"></div>
          <div className="font-inter font-semibold text-black text-[16px] md:text-[20px] lg:text-[35px]">
            Keranjang Belanja
          </div>
        </div>
        {isAnyChecked && (
          <div className="flex items-center pr-5">
            <button
              onClick={() => onRemoveItem(item.produkID)}
              className="block text-white lg:w-[106px] lg:h-[44px] bg-red-600 hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
