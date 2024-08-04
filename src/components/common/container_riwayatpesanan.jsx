import React from "react";

import CarrotImage from "../../assets/images/carrot.jpg";
import TruckIcon from "../../assets/images/truck.svg";
import ArrowNext from "../../assets/images/arrow_next.svg";

const ContainerRiwayatPesanan = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full py-3 lg:py-6">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <img
            src={CarrotImage}
            className="w-[88px] h-[71px] md:w-[132px] md:h-[101px] lg:w-[235px] lg:h-[186px] "
            alt="carrot"
          />
          <div className="flex flex-col items-start  justify-end">
            <div className="w-[250px] md:w-[530px] lg:w-[1040px] h-[20px] md:h-[30px] lg:h-[45px] text-start overflow-y-hidden font-inter font-semibold text-black text-[14px] md:text-[22px] lg:text-[30px] ">
              Nama product loren ipsum ddee
            </div>
            <div className="h-2"></div>
            <div className="w-[250px] md:w-[530px] h-[30px] md:h-[45px] lg:h-[55px] text-start overflow-y-hidden font-inter font-medium text-black text-[10px] md:text-[12px] lg:text-[17px] ">
              Lorem ipsum dolor sit amet consectetur. In in pellentesque
              sollicitudin aliquam tincidunt fermentum pharetra.
            </div>
            <div className="py-3">
              <div className="font-inter font-medium text-black pt-1 pb-1 px-[10px] md:px-[14px]  lg:px-4 border border-black rounded-sm lg:rounded-xl text-[10px] md:text-[12px] lg:text-[20px] ">
                5 kg
              </div>
            </div>
            <div className="font-inter font-bold text-primary text-[12px] md:text-[14px] lg:text-[25px]">
              Total Pesanan: Rp 100.000
            </div>
          </div>
          <div className="flex justify-end pt-24 lg:pt-40">
            <div className="flex items-center justify-center py-[5px] px-[13px] md:px-[23px] md:py-[9px] lg:py-4 lg:px-12 border border-black rounded-md lg:rounded-xl hover:text-white hover:bg-primary xw-[50px] h-[24px] md:w-[80px] md:h-[37px] lg:w-36 lg:h-14">
              <div className="font-inter font-medium  text-[12px] md:text-[16px] lg:text-[20px]">
                Nilai
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between border-b-[1px] lg:border-b-2 border-gray border-opacity-20 py-2 lg:py-5">
          <div className="flex flex-row items-center">
            <div>
              <img
                src={TruckIcon}
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                alt="truck"
              />
            </div>
            <div className="w-[6px]"></div>
            <div className="font-inter font-normal text-black text-[10px] md:text-[16px] lg:text-[22px]">
              Pesanan telah sampai diterima oleh yang bersangkutan
            </div>
          </div>
          <button onClick={() => (window.location.href = "/trackingorder")}>
            <img
              src={ArrowNext}
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              alt="next"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerRiwayatPesanan;
