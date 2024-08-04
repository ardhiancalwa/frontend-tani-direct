import React, { useState } from "react";

import QRIS from "../../assets/images/qris.svg";
import BankIcon from "../../assets/images/bank.svg";
import QRISPayment from "./qris";
import BankPayment from "./bank";

import ArrowBack from "../../assets/images/arrow-back.svg";
// import NavbarPembeli from "../../components/specific/navbar";

const PaymentMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState("QRIS");

  return (
    <div className="flex flex-col lg:min-h-screen bg-neutral md:max-w-screen-md max-w-screen-sm lg:w-full md:px-[70px] px-5">
      <div className="px-[20px] py-[60px] lg:px-10 lg:py-14 lg:w-[650px]">
        <div className="flex flex-col">
          <div className="lg:hidden flex">
            <div className="h-[20px] lg:h-[50px] "></div>{" "}
            <div className="flex flex-row row-auto items-center ">
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
              <div className="font-inter font-semibold text-black text-[16px] lg:text-[40px]">
                Payment Method
              </div>
            </div>
          </div>
          <div
            className="hidden lg:flex font-inter font-semibold text-black items-start"
            style={{ fontSize: 35 }}
          >
            Payment Method
          </div>
          <div className="flex flex-row justify-start lg:justify-evenly mt-6">
            <button
              className={`w-[120px] h-[67px] md:w-[217px] md:h-[114px] flex flex-col justify-center  border rounded-md lg:rounded-xl pl-5 py-4 cursor-pointer ${
                selectedPayment === "QRIS" ? "border-black" : "border-gray"
              }`}
              onClick={() => setSelectedPayment("QRIS")}
            >
              <img src={QRIS} alt="qris" className="mb-2" />
              <div
                className={`font-inter text-[11px] md:text-[20px] font-semibold ${
                  selectedPayment === "QRIS" ? "text-black" : "text-gray"
                }`}
              >
                QRIS
              </div>
            </button>
            <div className="w-[10px] lg:w-0"></div>
            <button
              className={`w-[120px] h-[67px] md:w-[217px] md:h-[114px] flex flex-col justify-center border rounded-md lg:rounded-xl pl-5 py-4 cursor-pointer ${
                selectedPayment === "Bank" ? "border-black" : "border-gray"
              }`}
              onClick={() => setSelectedPayment("Bank")}
            >
              <img src={BankIcon} alt="bank" className="mb-2" />
              <div
                className={`font-inter text-[11px] md:text-[20px] font-semibold ${
                  selectedPayment === "Bank" ? "text-black" : "text-gray"
                }`}
              >
                Transfer Bank
              </div>
            </button>
          </div>
          <div className="mt-10">
            {selectedPayment === "QRIS" && <QRISPayment />}
            {selectedPayment === "Bank" && <BankPayment />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
