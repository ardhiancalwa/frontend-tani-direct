import React from "react";

import ArrowBack from "../../assets/images/arrow_back3.svg";

const HeaderRiwayatPesanan = () => {
  return (
    <div>
      <div className="h-[30px] md:h-[70px] lg:h-[50px] "></div>
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
        <div className="font-inter font-semibold text-black text-[16px] md:text-[20px] lg:text-[45px]">
          Riwayat Pesanan
        </div>
      </div>
    </div>
  );
};

export default HeaderRiwayatPesanan;
