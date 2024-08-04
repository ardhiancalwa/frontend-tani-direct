import React from "react";

const ButtonWeightProduct = ({ weight, isSelected, onClick }) => {
  return (
    <div className="pr-2 cursor-pointer">
      <div style={{ height: 15 }}></div>
      <div
        onClick={() => onClick(weight)}
        className={`w-[45px] h-[24px] lg:w-[81px] lg:h-[44px] flex items-center justify-center border border-black font-medium font-inter text-[12px] lg:text-[20px] text-black rounded-md lg:rounded-xl ${
          isSelected ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {weight} kg
      </div>
    </div>
  );
};

export default ButtonWeightProduct;
