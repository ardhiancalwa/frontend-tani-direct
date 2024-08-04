import React from "react";

const FooterCart = ({ totalItems, totalPrice, isAnyChecked, onCheckout }) => {
  return (
    <div className="fixed bottom-0 right-0 left-0 bg-[#FAFAFA] border-t-2 border-gray border-opacity-10 lg:h-[140px] shadow-inner ">
      <div className="flex flex-row items-center justify-between lg:px-[250px] lg:py-8  py-6 px-0">
        <div className="font-inter font-normal text-black lg:text-[30px] text-[16px] md:text-[22px]">
          {totalItems} produk :{" "}
          <span className="font-semibold">
            Rp {totalPrice.toLocaleString()}
          </span>
        </div>
        <button
          className="bg-primary rounded-full"
          onClick={onCheckout}
          disabled={!isAnyChecked}
        >
          <div className="font-semibold text-white font-inter md:text-[20px] text-[15px] lg:px-[150px] lg:text-[30px]  md:px-[60px] md:py-[14px] px-[20px] py-[5px]">
            Bayar
          </div>
        </button>
      </div>
    </div>
  );
};

export default FooterCart;
