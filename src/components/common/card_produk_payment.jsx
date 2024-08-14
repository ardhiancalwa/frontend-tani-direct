import React from "react";
import CarrotImage from "../../assets/images/carrot.jpg"; // Update with your actual path
import TrashIcon from "../../assets/images/sampah.svg"; // Update with your actual path
import PlusMinusProduct from "./button_plusminus_product";

const ProductCardPayment = ({ product, quantity, onRemove }) => {
  // Determine the height based on the quantity of products
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  return (
    <div className={`lg:h-[100px] mb-10`}>
      <div className="flex flex-row justify-between md:border-none border border-gray lg:p-0 rounded-[5px]">
        <div className="flex flex-row">
          <img
            src={`${imageUrl}${product.image_produk}`}
            className="lg:border border-gray border-opacity-20 rounded-xl w-[85px] h-[62px] md:w-[170px] md:h-[120px] object-cover"
            alt="image_produk"
          />
          <div className="w-[25px]"></div>
          <div className="flex flex-col w-[700px] items-start">
            <div className="font-inter font-semibold text-black text-[14px] md:text-[20px] 2xl:text-[24px]">
              {product.nama_produk}
            </div>
            <div className="w-full h-auto py-2 overflow-hidden font-inter font-medium text-black text-start text-[10px] md:text-[18px] 2xl:text-[20px]">
              {product.deskripsi_produk}
            </div>
            <div style={{ height: 5 }}></div>
            <div className="hidden md:flex">
              <div className="flex items-center border border-gray border-opacity-40 rounded-md px-3 py-1 font-inter font-semibold text-black text-[14px] ">
                {product.selectedWeight} kg
              </div>
            </div>
            <div style={{ height: 5 }}></div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col items-start justify-start">
            <div className="font-inter font-bold text-black md:text-primary text-[12px] md:text-[18px]">
              {product.calculatedPrice !== undefined
                ? `Rp ${(
                    product.calculatedPrice * product.jumlah
                  ).toLocaleString('id-ID')}`
                : "Loading..."}
            </div>
            <div style={{ width: 10 }}></div>
            <div className="hidden md:flex font-inter font-normal text-gray line-through text-[15px]">
              {product.calculatedPrice !== undefined
                ? `Rp ${(
                    product.calculatedPrice * product.jumlah +
                    50000
                  ).toLocaleString('id-ID')}`
                : "Loading..."}
            </div>
          </div>
          <PlusMinusProduct quantity={quantity} />
          <button
            className="flex items-center justify-center bg-gray bg-opacity-20 w-5 h-5 md:w-9 md:h-9 rounded-full"
            onClick={() => onRemove(product.produkID)}
          >
            <img
              src={TrashIcon}
              className="w-[14px] h-[14px] md:w-[22px] md:h-[22px]"
              alt="sampah"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardPayment;
