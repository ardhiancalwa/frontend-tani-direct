import React, { useEffect, useState } from "react";

import ButtonWeightProduct from "../../components/common/button_weight_product";
import PlusMinusProduct from "../../components/common/button_plusminus_product";
import DetailImage from "../../components/common/detail_image";
import CartIcon from "../../assets/images/keranjang.svg";
const ContentDetailProduct = ({
  product,
  selectedWeight,
  calculatedPrice,
  quantity,
  onWeightClick,
  onQuantityChange,
  onBuyClick,
  onAddToCartClick,
}) => {
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";
  const [worthBuying, setWorthBuying] = useState(true);

  useEffect(() => {
    if (calculatedPrice !== undefined && selectedWeight !== null) {
      let isWorth = true;

      if (
        (selectedWeight === 20 && calculatedPrice > 1000000) ||
        (selectedWeight === 50 && calculatedPrice > 1500000) ||
        (selectedWeight === 75 && calculatedPrice > 1800000) ||
        (selectedWeight === 100 && calculatedPrice > 2500000)
      ) {
        isWorth = false;
      }

      setWorthBuying(isWorth);
    }
  }, [calculatedPrice, selectedWeight]);

  return (
    <div key={product.produkID}>
      <div className="h-[30px] lg:h-[20px]"></div>
      <div className="flex flex-col md:flex-row row-auto">
        <div>
          {product.image_produk?.slice(0,1).map((image, index) => (
            <img
              key={index}
              src={`${imageUrl}${image}`}
              className="border border-gray border-opacity-30 rounded-lg shadow-lg md:rounded-lg lg:rounded-2xl w-[370px] h-[222px] lg:w-[800px] lg:h-[300px] 2xl:w-[800px] 2xl:h-[500px] object-cover"
              alt={`${product.nama_produk} ${index + 1}`}
            />
          ))} 
          <DetailImage />
        </div>
        <div className="w-[36px] 2xl:w-[150px]"></div>
        <div className="flex flex-col col-auto items-start h-[275px] lg:w-full 2xl:w-full lg:h-[434px]">
          <div className="pt-[0px] lg:w-[505px] 2xl:w-[900px] md:py-0 font-inter font-semibold text-black text-start text-[18px] md:text-[16px] lg:text-[24px] 2xl:text-[40px]">
            {product.nama_produk}
          </div>
          <div className="py-[6px] lg:py-2 font-inter font-semibold text-black text-start text-[14px] md:text-[16px] lg:text-[20px] 2xl:text-[30px]">
            Description
          </div>
          <div className="font-inter font-medium text-black text-start text-[12px] lg:text-[16px] 2xl:text-[25px] ">
            {product.deskripsi_produk}
          </div>
          <div className="flex flex-row row-auto md:pt-2 2xl:pt-2">
            {[20, 50, 75, 100].map((weight) => (
              <ButtonWeightProduct
                key={weight}
                weight={weight}
                isSelected={selectedWeight === weight}
                onClick={() => onWeightClick(weight)}
              />
            ))}
          </div>
          <PlusMinusProduct
            quantity={quantity}
            onQuantityChange={onQuantityChange}
            maxQuantity={product.jumlah_stok}
          />
          <div>
            <div
              className={`flex items-center justify-center rounded-full font-inter text-[10px] lg:text-[14px] 2xl:text-[20px] font-medium ${
                worthBuying
                  ? "bg-greenLight w-[96px] h-[28px] lg:w-[100px] lg:h-[35px] 2xl:w-[155px] 2xl:h-[54px]  text-primary"
                  : "bg-danger bg-opacity-20 w-[105px] h-[28px] lg:w-[130px] lg:h-[35px] 2xl:w-[180px] 2xl:h-[54px]  text-danger"
              }`}
            >
              {worthBuying ? "Worth to buy" : "Not worth to buy"}{" "}
            </div>
          </div>
          <div className="flex flex-col lg:pt-[10px] lg:h-[172px] col-auto p-1">
            <div className="flex flex-row row-auto items-center md:pt-[0px]">
              <span className="font-inter text-[20px] lg:text-[26px] 2xl:text-[40px] font-bold text-primary">
                {calculatedPrice !== undefined
                  ? `Rp ${(calculatedPrice * 1).toLocaleString("id-ID")}`
                  : "Loading..."}
              </span>
              <div style={{ width: 10 }}></div>
              <span className="font-inter text-[14px] md:text-[10px] lg:text-[16px] 2xl:text-[25px] font-normal text-gray text-opacity-50 line-through">
                {calculatedPrice !== undefined
                  ? `Rp ${(calculatedPrice + 150000).toLocaleString("id-ID")}`
                  : "Loading..."}
              </span>
            </div>
            <div className="flex items-start py-[8px]">
              <div className="font-inter text-[14px] md:text-[12px] lg:text-[18px] 2xl:text-[25px] font-semibold text-black">
                Stok: {product.jumlah_stok}
              </div>
            </div>
            <div className="hidden md:flex flex-row row-auto 2xl:py-5">
              <button
                className="bg-primary md:rounded lg:rounded-xl md:w-[180px] md:h-[34px] lg:w-[250px] lg:h-[55px] 2xl:w-[850px] 2xl:h-[64px] "
                onClick={onBuyClick}
              >
                <div className="flex items-start justify-center text-white font-inter font-semibold md:text-[10px] lg:text-[20px]">
                  Buy
                </div>
              </button>
              <div style={{ width: 35 }}></div>
              <button
                className="flex flex-row row-auto items-center justify-center bg-white border border-primary md:rounded lg:rounded-xl md:w-full md:h-[34px] lg:w-full lg:h-[55px] 2xl:h-[64px] 2xl:w-full"
                onClick={onAddToCartClick}
              >
                <img
                  src={CartIcon}
                  className="md:w-[10px] md:h-[10px] lg:w-6 lg:h-6"
                  alt="cart icon"
                />
                <div style={{ width: 10 }}></div>
                <div className="flex items-center justify-center text-primary font-inter font-semibold md:text-[10px] lg:text-[20px]">
                  Masukkan Keranjang
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailProduct;
