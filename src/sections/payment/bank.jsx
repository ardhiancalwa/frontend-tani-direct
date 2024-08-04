import React, { useState } from "react";

import BRIIcon from "../../assets/images/bri.png";
import BCAIcon from "../../assets/images/bca.png";
import MandiriIcon from "../../assets/images/mandiri.png";
import BSIIcon from "../../assets/images/bsi.png";
import BNIIcon from "../../assets/images/bni.png";
import PermataIcon from "../../assets/images/permata.png";

const banks = [
  { name: "Bank BCA", icon: BCAIcon },
  { name: "Bank Mandiri", icon: MandiriIcon },
  { name: "Bank Syariah Indonesia (BSI)", icon: BSIIcon },
  { name: "Bank BRI", icon: BRIIcon },
  { name: "Bank BNI", icon: BNIIcon },
  { name: "Bank Permata", icon: PermataIcon },
];

const BankPayment = () => {
  const [selectedBank, setSelectedBank] = useState(null);

  return (
    <div>
      <div className="flex flex-col w-full">
        {banks.map((bank, index) => (
          <div key={index} className="py-2">
            <div
              className={`border rounded-md h-auto lg:rounded-xl cursor-pointer ${
                selectedBank === bank.name
                  ? "border-4 border-primary "
                  : "border-black"
              }`}
              onClick={() => setSelectedBank(bank.name)}
            >
              <div className="flex flex-row items-center py-[5px] px-[15px] md:px-5 md:py-2 ">
                <img
                  src={bank.icon}
                  className="w-[30px] h-[30px] md:h-[40px] md:w-[40px] "
                  alt={bank.name}
                />
                <div style={{ width: 10 }}></div>
                <div className="font-inter text-[12px] text-black md:text-[15px] font-semibold">
                  {bank.name}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="pt-[150px] lg:pt-0 lg:px-0 lg:py-9">
          <div className="lg:hidden flex flex-col md:border-t-[1px] border-gray w-[350px] md:w-full py-3 lg:px-7">
            <div className="flex items-start">
              <div className="font-inter font-semibold text-black text-[16px] md:text-[22px]">
                Rincian Pembayaran
              </div>
            </div>
            <div style={{ height: 10 }}></div>
            <div className="flex flex-row justify-between">
              <div className="font-inter font-medium text-gray text-[13px] md:text-[20px]">
                Subtotal untuk Produk
              </div>
              <div className="font-inter font-medium text-gray text-[13px] md:text-[20px]">
                Rp 100.000
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="font-inter font-medium text-gray text-[13px] md:text-[20px]">
                Subtotal Pengiriman{" "}
              </div>
              <div className="font-inter font-medium text-gray text-[13px] md:text-[20px]">
                Rp 10.000
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="font-inter font-medium text-black text-[13px] md:text-[20px]">
                Total Pembayaran{" "}
              </div>
              <div className="font-inter font-medium text-black text-[13px] md:text-[20px]">
                Rp 110.000
              </div>
            </div>
          </div>
          <div className="lg:h-[28px]"></div>
          <button className="bg-[#002F19] w-[221px] md:w-full rounded-xl text-[10px] md:text-[20px]">
            <div
              className="py-3 font-inter font-semibold text-white"
              onClick={() => (window.location.href = "/pembayaran")}
            >
              Selanjutnya
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankPayment;
