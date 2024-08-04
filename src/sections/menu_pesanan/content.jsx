import React, { useState } from "react";

import ImageProduct from "../../assets/images/bayam_mini.png";
import CheckIcon from "../../assets/images/check4.svg";

const ContentMenuPesanan = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    // setIsChecked(!isChecked);
    // onItemCheck(item.produkID, !isChecked);
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
  };
  return (
    <div>
      <div className="hidden md:flex flex-row items-center justify-between  md:pt-[20px] md:pb-[18px] py-5">
        <div className="font-inter md:text-[20px] lg:text-[30px] font-semibold text-black ">
          50 Produk
        </div>
        <button
          className="border border-black rounded-md md:w-[184px] md:h-[47px] lg:w-[195px] lg:h-[50px] "
          onClick={() => (window.location.href = "/uploadproduct")}
        >
          + Tambah Produk Baru
        </button>
      </div>
      <div className="overflow-x-auto pt-[20px] md:py-0">
        <table className="w-full text-xl font-inter text-black">
          <thead className=" ">
            <tr className="text-[10px] md:text-[16px] lg:text-2xl font-bold bg-greenLight bg-opacity-70">
              <th
                scope="col"
                className=" px-3 md:px-6  py-3 text-left rounded-s-lg"
              >
                Nama Produk
              </th>
              <th className=" px-3 md:px-6 py-3 ">Harga</th>
              <th className=" px-3 md:px-6  py-3 ">Stok</th>
              <th className=" px-3 md:px-6 py-3 rounded-e-lg">Penjualan</th>
            </tr>
          </thead>
          <tbody className="font-inter font-medium text-black text-[10px] md:text-[16px] lg:text-[20px] ">
            {[...Array(14)].map((_, index) => (
              <tr key={index} className="border-b">
                <td className=" px-3 md:px-6  py-4 flex items-center">
                  <button
                    className={`border w-[14px] h-[14px] md:w-6 md:h-6 border-gray rounded-sm lg:rounded-sm flex items-center justify-center ${
                      isChecked ? "bg-primary" : ""
                    }`}
                    onClick={handleClick}
                  >
                    {isChecked ? <img src={CheckIcon} alt="check" /> : ""}
                  </button>
                  <div className="w-[5px] md:w-[15px]"></div>
                  <img
                    src={ImageProduct}
                    alt="bayam"
                    className="w-5 h-5 md:w-10 md:h-10 mr-4"
                  />
                  <div>Bayam</div>
                </td>
                <td className=" px-3 md:px-6  py-4">Rp 100.000</td>
                <td className=" px-3 md:px-6  py-4">98</td>
                <td className=" px-3 md:px-6  py-4">12</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h-[100px]"></div>
      <div className="fixed bottom-0 right-0 left-0 h-[45px] md:h-[60px] lg:h-[80px] w-full bg-neutral px-5 md:px-[10px] lg:px-[240px]">
        <div className=" py-2 md:py-4 lg:py-5 border-t-2 border-gray">
          <div className="flex flex-row justify-between px-3 md:px-6">
            <div className="flex flex-row items-center">
              <div className="w-[14px] h-[14px] md:w-[24px] md:h-[24px] lg:w-5 lg:h-5 border-[1px] border-black rounded-sm"></div>
              <div className="pl-[10px] md:pl-[14px] lg:pl-[16px] font-inter font-semibold text-[10px] md:text-[16px] lg:text-[20px]">
                Pilih Semua
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="font-inter font-semibold text-[10px] md:text-[16px] lg:text-[20px] pr-[11px] md:pr-[16px] lg:pr-[20px]">
                2 produk dipilih
              </div>
              <div className="pr-[7px] md:pr-[12px] lg:pr-[20px]">
                <button className="w-[64px] h-[20px] md:w-[84px] md:h-[30px] lg:w-[104px] lg:h-[40px] flex items-center justify-center border-2 border-primary rounded-md font-inter font-semibold text-[8px] md:text-[12px] lg:text-[16px]">
                  Hapus
                </button>
              </div>
              <div>
                <button className="w-[64px] h-[20px] md:w-[84px] md:h-[30px] lg:w-[104px] lg:h-[40px] flex items-center justify-center bg-primary rounded-md font-inter font-semibold text-[8px] md:text-[12px] lg:text-[16px] text-white">
                  Tampilkan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMenuPesanan;
