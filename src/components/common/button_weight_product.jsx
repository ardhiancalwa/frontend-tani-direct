import React from "react";

const ButtonWeightProduct = ({ weight, isSelected, onClick }) => {
  return (
    <div className="pr-2 cursor-pointer mt-2">
      <div
        onClick={() => onClick(weight)}
        className={`w-[9vw] h-[5vw] md:w-[50px] md:h-[25px] lg:w-[60px] lg:h-[30px] 2xl:w-[75px] 2xl:h-[40px] flex items-center justify-center border border-black font-medium font-inter text-[10px] lg:text-[14px] 2xl:text-[18px] text-black rounded-md 2xl:rounded-xl ${
          isSelected ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {weight} kg
      </div>
    </div>
  );
};

export default ButtonWeightProduct;
