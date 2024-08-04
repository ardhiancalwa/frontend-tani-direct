import React from "react";

const DetailOrder = ({ title, value }) => {
  return (
    <div className="flex flex-col items-start py-3">
      <div className="font-inter font-semibold text-gray text-[8px] md:text-[14px] lg:text-[16px] ">
        {title}
      </div>
      <div style={{ height: 10 }}></div>
      <div className="font-inter font-semibold text-black text-[10px] md:text-[16px] lg:text-[20px] ">
        {value}
      </div>
    </div>
  );
};

export default DetailOrder;
