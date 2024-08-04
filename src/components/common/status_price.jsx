import React, { useState } from "react";

const StatusPrice = () => {
  const [worthBuying, setWorthBuying] = useState(true);

  const handleClick = () => {
    setWorthBuying(!worthBuying);
  };

  return (
    <div>
      <div
        className={`flex items-center justify-center rounded-full font-inter text-[10px] lg:text-[20px] font-medium  md:w-[77px] md:h-[22px] lg:w-[155px] lg:h-[54px] ${
          worthBuying
            ? "bg-greenLight w-[96px] h-[28px] lg:w-[155px] lg:h-[54px]  text-primary"
            : "bg-danger bg-opacity-20 w-[105px] h-[28px]  lg:w-[180px] lg:h-[54px]  text-danger"
        }`}
        onClick={handleClick}
      >
        {worthBuying ? "Worth to buy" : "Not worth to buy"}
      </div>
    </div>
  );
};

export default StatusPrice;
