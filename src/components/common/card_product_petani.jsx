import React from "react";

import ImageDummy from "../../assets/images/sayur.jpg";
import love from "../../assets/images/love.svg";
import eye from "../../assets/images/eye.svg";
import cart from "../../assets/images/cart_box.svg";
import layers from "../../assets/images/stock.svg";
import ButtonWeightProduct from "./button_weight_product";

const CardMyProduct = ({ product }) => {
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  return (
    <div className="lg:py-6 md:py-4 py-2 border-b ">
      <div className="min-w-full flex flex-row row-automd:p-2 lg:pb-4 ">
        <div className="flex items-center">
          <img
            src={`${imageUrl}${product.image_produk[0]}`}
            className="lg:w-[350px] lg:border border-gray border-opacity-30 rounded-xl lg:h-[212px] md:w-[250px] md:h-[150px] w-[150px] h-[100px] object-cover"
            alt="sayur"
          />
        </div>
        <div className="flex flex-col w-full lg:px-6 lg:py-0 2xl:py-6 2xl:px-10 p-3 ">
          <div className="flex flex-row justify-between gap-2">
            <div
              className="w-full h-auto font-inter font-semibold text-black 2xl:text-[34px] lg:text-[32px] md:text-[20px] text-[14px] text-start "
              style={{ lineHeight: 1.2 }}
            >
              {product.nama_produk}
            </div>
          </div>
          <div className="w-full h-auto font-inter font-semibold text-black text-start 2xl:text-[22px] lg:text-[17px] text-[10px] mt-1 md:text-[0.9rem]">
            {product.deskripsi_produk}
          </div>
          <div className="flex flex-row row-auto 2xl:pt-2">
            {[20, 50, 75, 100].map((weight) => (
              <ButtonWeightProduct
                key={weight}
                weight={weight}
                // isSelected={selectedWeight === weight}
                // onClick={onWeightClick}
              />
            ))}
          </div>
          <div className="flex flex-row row-auto items-center pt-2">
            <div className="font-inter font-bold text-primary  lg:text-[30px] text-[14px]  md:text-[20px]  ">
            Rp {product.harga.toLocaleString('id-ID')}
            </div>
            <div className="w-[5px] md:w-[10px]"></div>
            <div className="font-inter font-normal text-gray text-opacity-50 line-through lg:text-[20px] text-[10px] md:text-[15px] ">
            Rp {(product.harga + 150000).toLocaleString('id-ID')}
            </div>
          </div>
        </div>
      </div>
      <div className="md:py-2">
        <div className="flex flex-col md:flex-row justify-between md:justify-between items-center flex-wrap gap-3 ">
          <div className="flex flex-row justify-between w-full md:w-[300px] lg:w-[400px] 2xl:w-[800px]">
            <div className="flex md:  flex-row w-auto items-center gap-2 ">
              <img
                src={eye}
                alt=""
                className="w-[15px] h-[15px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] 2xl:w-[40px] 2xl:h-[30px]"
              />
              <p className="text-[10px] md:text-[15px] lg:text-[20px] 2xl:text-[25px] font-semibold">
                Dilihat
              </p>
              <p className="text-[10px] md:text-[15px]  lg:text-[20px] 2xl:text-[25px] font-semibold">
                302
              </p>
            </div>
            <div className="flex items-center gap-2 w-auto">
              <img
                src={love}
                alt=""
                className="w-[15px] h-[15px] md:w-[25px] md:h-[25px] lg:h-[30px] 2xl:w-[40px] 2xl:h-[30px] "
              />
              <p className="text-[10px] md:text-[15px]  lg:text-[20px] 2xl:text-[25px] font-semibold">
                Favorite
              </p>
              <p className="text-[10px] md:text-[15px] lg:text-[20px] 2xl:text-[25px] font-semibold">
                300
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full md:w-[300px] lg:w-[400px] 2xl:w-[800px] ">
            <div className="flex items-center gap-2 w-auto">
              <img
                src={layers}
                alt=""
                className="w-[15px] h-[15px] md:w-[25px] md:h-[25px] lg:h-[30px] 2xl:w-[40px] 2xl:h-[30px] "
              />
              <p className="text-[10px] md:text-[15px] lg:text-[20px] 2xl:text-[25px] font-semibold">
                Stok
              </p>
              <p className="text-[10px] md:text-[15px] lg:text-[20px] 2xl:text-[25px] font-semibold">
                {product.jumlah_stok}
              </p>
            </div>
            <div className="flex items-center gap-2 w-auto">
              <img
                src={cart}
                alt=""
                className="w-[15px] h-[15px] md:w-[25px] md:h-[25px] lg:h-[30px] 2xl:w-[40px] 2xl:h-[30px]"
              />
              <p className="text-[10px] md:text-[15px] lg:text-[20px] 2xl:text-[25px] font-semibold">
                Terjual
              </p>
              <p className="text-[10px] md:text-[15px] lg:text-[20px] 2xl:text-[25px] font-semibold">
                {product.totalSold}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMyProduct;
