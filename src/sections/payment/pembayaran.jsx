import React from "react";

import BCAIcon from "../../assets/images/bca2.png";
import ArrowBack from "../../assets/images/arrow-back.svg";

const PembayaranPage = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[315px]">
      <div className="h-[20px] lg:h-[69px]"></div>
      <div
        className="hidden lg:flex flex-col justify-center font-inter font-semibold text-black"
        style={{ fontSize: 35 }}
      >
        Pembayaran
      </div>
      <div>
        <div className="h-[20px] lg:h-[50px] "></div>{" "}
        <div className="lg:hidden flex flex-row row-auto items-center ">
          <button
            className="flex items-center justify-center border border-black rounded-full w-6 h-6 lg:w-10 lg:h-10"
            onClick={() => window.history.back()}
          >
            <img
              src={ArrowBack}
              className="w-3 h-3 lg:w-4 lg:h-4"
              alt="arrow back"
            />
          </button>
          <div className="w-2 lg:w-5"></div>
          <div className="flex flex-col items-center ">
            <div className="font-inter font-semibold text-black text-[16px] md:text-3xl">
              Pembayaran
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20px] lg:h-[67px] "></div>
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between font-inter text-[16px] md:text-[20px] lg:text-[30px] font-semibold text-black">
            <div>Total Pembayaran</div>
            <div>Rp 100.000</div>
          </div>
          <div className="h-[5px] lg:h-[20px]"></div>
          <div className="flex flex-row justify-between font-inter text-[16px] md:text-[20px] lg:text-[30px] font-semibold text-black">
            <div>Bayar Dalam</div>
            <div>23 jam 50 menit 24 detik</div>
          </div>
        </div>
        <div className="h-[25px] lg:h-[74px]"></div>
        <div className="border border-black w-full rounded-xl">
          <div className="flex flex-row items-center px-5 py-4">
            <img
              src={BCAIcon}
              className="w-[37px] h-[35px] lg:w-16 lg:h-16"
              alt="bca"
            />
            <div style={{ width: 25 }}></div>
            <div className="flex flex-col items-start">
              <div className="font-inter text-[14px] md:text-[22px] lg:text-[30px] font-semibold text-black">
                Bank BCA
              </div>
              <div className="font-inter text-[14px] md:text-[22px] lg:text-[25px] font-semibold text-black">
                No Rek/Virtual Account
              </div>
              <div className="font-inter text-[14px] md:text-[22px] lg:text-[35px] font-semibold text-red-500">
                101 0812 1292 9212
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow"></div>
      </div>
      <div className="lg:px-64 flex flex-col items-center mt-auto mb-10">
        <button className="bg-[#002F19] w-[221px] md:w-full rounded-xl text-[10px] md:text-[20px]">
          <div
            className="py-3 font-inter font-semibold text-white"
            onClick={() => (window.location.href = "/success")}
          >
            Buat Pesanan
          </div>
        </button>
      </div>
    </div>
  );
};

export default PembayaranPage;
