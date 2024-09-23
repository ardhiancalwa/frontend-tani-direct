import React from "react";
import CarrotImage from "../../assets/images/carrot.jpg"; // Update with your actual path
import TrashIcon from "../../assets/images/sampah.svg"; // Update with your actual path

const ProductCardUserPayment = ({
  product,
  onRemove,
  onMaxQuantity,
  quantity,
  onQuantityChange,
}) => {
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  return (
    <div className="py-2">
      <div className="flex flex-row justify-between border border-gray p-2 md:p-4 rounded-[5px]">
        <div className="flex flex-row">
          <img
            src={`${imageUrl}${product.image_produk[0]}`}
            className="lg:border border-gray border-opacity-20 rounded-md w-[25vw] h-[20vw] md:w-[20vw] md:h-[15vw] lg:w-[20vw] lg:h-[12vw] xl:w-[20vw] xl:h-[10vw] 2xl:w-[16vw] 2xl:h-[8vw] object-cover"
            alt="image_produk"
          />
          <div className="flex flex-col w-full items-start ml-1 md:ml-2 lg:ml-4">
            <div className="font-inter font-semibold text-black text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] 2xl:text-[1.5rem]">
              {product.nama_produk}
            </div>
            <div className="font-inter font-medium py-[0.4vw] text-black text-start text-[0.55rem] md:text-[0.75rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[1.2rem] line-clamp-3">
              {product.deskripsi_produk}
            </div>
            <div className="flex">
              <div className="flex items-center border border-gray border-opacity-40 rounded-md px-3 py-1 font-inter font-semibold text-black text-[0.5rem] md:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[1rem]">
                {product.selectedWeight} kg
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start justify-start md:px-5 xl:px-10">
            <div className="w-[15vw] md:w-[10vw] lg:w-[7.9vw] xl:w-[6.6vw] font-inter font-bold text-black md:text-primary text-[0.6rem] md:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.2rem]">
              {product.calculatedPrice !== undefined
                ? `Rp ${(product.calculatedPrice * quantity).toLocaleString('id-ID')}`
                : "Loading..."}
            </div>
            <div className="hidden md:flex font-inter font-normal text-gray line-through text-[0.6rem] xl:text-[0.8rem] 2xl:text-[1rem]">
              {product.calculatedPrice !== undefined
                ? `Rp ${(
                    product.calculatedPrice * quantity +
                    50000
                  ).toLocaleString('id-ID')}`
                : "Loading..."}
            </div>
          </div>
          <button
            className="flex items-center justify-center bg-gray bg-opacity-10 w-5 h-5 md:w-9 md:h-9 2xl:w-10 2xl:h-10 rounded-full"
            onClick={() => onRemove(product.produkID)}
          >
            <img
              src={TrashIcon}
              className="w-[14px] h-[14px] md:w-[22px] md:h-[22px] 2xl:w-[24px] 2xl:h-[24px]"
              alt="sampah"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardUserPayment;
