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
      <div className="flex flex-col md:flex-row row-auto mt-28">
        <div>
          {product.image_produk?.slice(0,1).map((image, index) => (
            <img
              key={index}
              src={`${imageUrl}${image}`}
              className="border border-gray border-opacity-30 rounded-lg shadow-lg md:rounded-lg lg:rounded-2xl w-full h-[50vw] md:h-[36vw] lg:h-[38vw] xl:h-[25vw] 2xl:h-[25vw] object-cover"
              alt={`${product.nama_produk} ${index + 1}`}
            />
          ))} 
          <DetailImage />
        </div>
        <div className="flex flex-col col-auto items-start md:w-full lg:w-full 2xl:w-full md:ml-3 2xl:ml-8">
          <div className="font-inter font-semibold text-black text-start text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] 2xl:text-[40px]">
            {product.nama_produk}
          </div>
          <div className="py-[1vw] md:py-[0.2vw] lg:py-[0.3vw ] font-inter font-semibold text-black text-start text-[1rem] md:text-[1rem] lg:text-[1.3rem] 2xl:text-[30px]">
            Description
          </div>
          <div className="font-inter font-medium text-black text-start text-[0.8rem] md:text-[0.8rem] lg:text-[16px] 2xl:text-[25px] break-words line-clamp-3 lg:line-clamp-4 xl:line-clamp-3">
            {product.deskripsi_produk}
          </div>
          <div className="flex flex-row row-auto 2xl:pt-2">
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
              className={`flex items-center justify-center rounded-full font-inter text-[0.6rem] md:text-[0.8rem] lg:text-[14px] 2xl:text-[20px] font-medium ${
                worthBuying
                  ? "bg-greenLight w-[18vw] h-[6vw] md:w-[15vw] md:h-[4.5vw] lg:w-[100px] lg:h-[35px] 2xl:w-[155px] 2xl:h-[54px]  text-primary"
                  : "bg-danger bg-opacity-20 w-[20vw] md:w-[16vw] md:h-[4.5vw] h-[6vw] lg:w-[130px] lg:h-[35px] 2xl:w-[180px] 2xl:h-[54px]  text-danger"
              }`}
            >
              {worthBuying ? "Worth to buy" : "Not worth to buy"}{" "}
            </div>
          </div>
          <div className="flex flex-col lg:pt-[10px] lg:h-[172px] col-auto p-1">
            <div className="flex flex-row row-auto items-center">
              <span className="font-inter text-[1rem] md:text-[1.3rem] lg:text-[26px] 2xl:text-[40px] font-bold text-primary">
                {calculatedPrice !== undefined
                  ? `Rp ${(calculatedPrice * 1).toLocaleString("id-ID")}`
                  : "Loading..."}
              </span>
              <span className="ml-2 font-inter text-[0.6rem] md:text-[0.8rem] lg:text-[16px] 2xl:text-[25px] font-normal text-gray text-opacity-50 line-through">
                {calculatedPrice !== undefined
                  ? `Rp ${(calculatedPrice + 150000).toLocaleString("id-ID")}`
                  : "Loading..."}
              </span>
            </div>
            <div className="flex items-start py-[1vw]">
              <div className="font-inter text-[0.8rem] md:text-[1rem] lg:text-[18px] 2xl:text-[25px] font-semibold text-black">
                Stok: {product.jumlah_stok}
              </div>
            </div>
            <div className="hidden md:flex flex-row row-auto">
              <button
                className="bg-primary md:rounded-lg lg:rounded-xl md:w-[25vw] md:h-[34px] lg:w-[250px] lg:h-[55px] 2xl:w-[23vw] 2xl:h-[3vw] "
                onClick={onBuyClick}
              >
                <div className="flex items-start justify-center text-white font-inter font-semibold md:text-[0.8rem] lg:text-[20px]">
                  Buy
                </div>
              </button>
              <div style={{ width: 35 }}></div>
              <button
                className="flex flex-row row-auto items-center justify-center bg-white border border-primary md:rounded-lg lg:rounded-xl md:w-full md:h-[34px] lg:w-full lg:h-[55px] 2xl:w-[23vw] 2xl:h-[3vw]"
                onClick={onAddToCartClick}
              >
                <img
                  src={CartIcon}
                  className="md:w-[2vw] md:h-[2vw] lg:w-6 lg:h-6"
                  alt="cart icon"
                />
                <div style={{ width: 10 }}></div>
                <div className="flex items-center justify-center text-primary font-inter font-semibold md:text-[0.8rem] lg:text-[20px]">
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
