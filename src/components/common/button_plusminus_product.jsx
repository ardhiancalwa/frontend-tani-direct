import React from "react";

const PlusMinusProduct = ({ quantity, maxQuantity, onQuantityChange }) => {
  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="py-[3vw] md:py-[2vw] lg:py-2 2xl:py-[20px] ">
      <div className="flex flex-row row-auto items-center font-medium font-inter text-[16px] lg:text-[25px] text-black w-[48px] h-[19px] md:w-[66px] md:h-[26px] lg:w-[135px] lg:h-[60px]">
        <button
          className=" border border-gray border-opacity-50 rounded-l-[5px] text-[12px] md:text-[16px] 2xl:text-[28px] lg:rounded-l-lg 2xl:rounded-l-xl lg:px-[10px] py-[4] px-[5px] lg:py-[5px]"
          onClick={handleDecrease}
        >
          -
        </button>
        <div className=" border border-gray border-opacity-50 text-[12px] md:text-[16px] 2xl:text-[28px] lg:px-[15px] py-[4] px-[7px] lg:py-[5px]">
          {quantity}
        </div>
        <button
          className=" border border-gray border-opacity-50 rounded-r-[5px] text-[12px] md:text-[16px] 2xl:text-[28px] lg:rounded-r-lg 2xl:rounded-r-xl lg:px-[10px] px-[5px] py-[4] lg:py-[5px]"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PlusMinusProduct;
