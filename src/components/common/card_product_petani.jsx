import React from "react";

import ImageDummy from "../../assets/images/sayur.jpg";
import love from "../../assets/images/love.svg";
import eye from "../../assets/images/eye.svg";
import cart from "../../assets/images/cart_box.svg";
import layers from "../../assets/images/stock.svg";

const CardProduct = () => {
  return (
    <div className="lg:py-6 py-2 border-b ">
      <div className="min-w-full flex flex-row row-automd:p-2 lg:pb-4 py-2 pb-3 ">
        <div className="flex items-center lg:border lg:border-gray">
          <img
            src={ImageDummy}
            className="lg:w-[350px] lg:h-[212px] w-[200px]  h-[100px] object-fill"
            alt="sayur"
          />
        </div>
        <div className="flex flex-col w-full lg:p-6 p-3 ">
          <div className="flex flex-row justify-between gap-2">
            <div
              className="font-inter font-semibold text-black lg:text-[32px] md:text-[23px] text-[14px] text-start "
              style={{ lineHeight: 1.2 }}
            >
              Nama product loren ipsum ddee
            </div>
          </div>
          <div className="lg:block hidden" style={{ height: 12 }}></div>
          <div className="font-inter font-semibold text-black text-start lg:text-[17px] text-[10px] mt-1 md:text-[0.9rem] ">
            Lorem ipsum dolor sit amet consectetur. In in pellentesque Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Velit, alias.
          </div>
          <div className="lg:block hidden" style={{ height: 12 }}></div>
          <div className="flex items-center mt-1 justify-start gap-2 mb-1 ">
            <span className="p-1  lg:w-[91px] lg:h-[34px] w-[35px] md:w-[49px] md:h-[27px] h-[18px] border rounded-md justify-center items-center flex">
              <p className="text-[10px] md:text-[14px] lg:text-[20px]  font-semibold ">
                5 kg
              </p>
            </span>
            <span className="p-1  lg:w-[91px] lg:h-[34px] w-[35px] h-[18px] md:w-[49px] md:h-[27px] border rounded-md justify-center items-center flex">
              <p className="text-[10px] font-semibold  lg:text-[20px] md:text-[14px]">
                10 kg
              </p>
            </span>
            <span className="p-1  lg:w-[91px] lg:h-[34px] w-[35px] h-[18px]  md:w-[49px] md:h-[27px] border rounded-md justify-center items-center flex">
              <p className="text-[10px] font-semibold  lg:text-[20px] md:text-[14px]">
                15 kg
              </p>
            </span>
            <span className="p-1  lg:w-[91px] lg:h-[34px] w-[35px] h-[18px] md:w-[49px] md:h-[27px] border rounded-md justify-center items-center flex">
              <p className="text-[10px] font-semibold  lg:text-[20px] md:text-[14px]">
                20 kg
              </p>
            </span>
          </div>
          <div className="flex flex-row row-auto items-center">
            <div className="font-inter font-bold text-primary  lg:text-[30px] text-[12px]  md:text-[20px]  ">
              Rp. 100.000
            </div>
            <div style={{ width: 10 }}></div>
            <div className="font-inter font-normal text-gray text-opacity-50 line-through lg:text-[20px] text-[8px] md:text-[15px] ">
              Rp. 150.000
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between  items-center flex-wrap gap-3 ">
          <div className="flex md:flex-row w-[130px] items-center gap-2 ">
            <img
              src={eye}
              alt=""
              className="md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] "
            />
            <p className="text-[10px] md:text-[15px] lg:text-[25px] font-semibold">
              Dilihat
            </p>
            <p className="text-[10px] md:text-[15px] lg:text-[25px] font-semibold">
              1033
            </p>
          </div>
          <div className="flex items-center gap-2 w-[130px]">
            <img
              src={love}
              alt=""
              className="md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] "
            />
            <p className="text-[10px] md:text-[15px] lg:text-[25px] font-semibold">
              Dilihat
            </p>
            <p className="text-[10px] md:text-[15px] lg:text-[25px] font-semibold">
              1033
            </p>
          </div>

          <div className="flex items-center gap-2 w-[130px]">
            <img
              src={layers}
              alt=""
              className="md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] "
            />
            <p className="text-[10px] md:text-[15px] lg:text-[25px] font-semibold">
              Dilihat
            </p>
            <p className="text-[10px] md:text-[15px] lg:text-[25px] font-semibold">
              1033
            </p>
          </div>
          <div className="flex items-center gap-2 w-[130px]">
            <img src={cart} alt="" className="md:w-[30px] md:h-[30px] " />
            <p className="text-[10px] md:text-[15px] font-semibold">Dilihat</p>
            <p className="text-[10px] md:text-[15px] font-semibold">1033</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;