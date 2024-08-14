import React from "react";

import CarrotImage from "../../assets/images/carrot.jpg";
import TruckIcon from "../../assets/images/truck.svg";
import ArrowNext from "../../assets/images/arrow_next.svg";

const ContainerRiwayatPesanan = ({ products }) => {
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";
  const calculateTotalPrice = (harga, jumlah, berat_produk) => {
    if (berat_produk === 25) {
      return harga * jumlah * 1;
    } else if (berat_produk === 50) {
      return harga * jumlah * 1.25;
    } else if (berat_produk === 75) {
      return harga * jumlah * 1.5;
    } else if (berat_produk === 100) {
      return harga * jumlah * 1.75;
    } else {
      return harga * jumlah;
    }
  }

  return (
    <div className="max-w-screen-sm md:max-w-full py-3 lg:py-6">
      {products.map((products, index) => (
        <div key={index}>
          <div className="flex flex-col py-1 md:py-2">
            <div className="flex flex-row items-end pb-1 md:pb-2">
              <img
                src={`${imageUrl}${products.image_produk}`}
                className="w-[110px] h-[90px] md:w-[160px] md:h-[120px] lg:w-[235px] lg:h-[186px] 2xl:w-[270px] 2xl:h-[200px] shadow-sm rounded-lg object-cover"
                alt="image_produk"
              />
              <div className="w-2 md:w-5"></div>
              <div className="flex flex-col items-start justify-end w-full">
                <div className="w-full h-auto text-start overflow-y-hidden font-inter font-semibold text-black text-[14px] md:text-[22px] lg:text-[30px] line-clamp-2">
                  {products.nama_produk}
                </div>
                <div className="h-0 2xl:h-2"></div>
                <div className="w-full h-auto text-start overflow-y-hidden font-inter font-medium text-black text-[10px] md:text-[12px] lg:text-[17px] line-clamp-2">
                  {products.deskripsi_produk}
                </div>
                <div className="py-1 2xl:py-3">
                  <div className="font-inter font-medium text-black px-2 py-1 md:px-[14px]  lg:px-4 border border-black rounded-md lg:rounded-xl text-[8px] md:text-[12px] lg:text-[20px] ">
                    {products.berat_produk} kg
                  </div>
                </div>
                <div className="font-inter font-bold text-primary text-[10px] md:text-[14px] lg:text-[25px]">
                Total Pesanan: Rp {calculateTotalPrice(products.harga, products.jumlah, products.berat_produk).toLocaleString('id-ID')}
                </div>
              </div>
              <div className="flex  lg:pt-40">
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
      ))}
      ;
    </div>
  );
};

export default ContainerRiwayatPesanan;
