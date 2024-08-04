import React, { useState } from "react";

import CartImage from "../../assets/images/carrot.jpg";
import PlusMinusProduct from "./button_plusminus_product";
import CheckIcon from "../../assets/images/check4.svg";

const ContainerCart = ({ item, onItemCheck, onQuantityChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(item.jumlah);
  const [calculatedPrice, setCalculatedPrice] = useState(item.calculatedPrice);
  const imageURl = "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  const handleClick = () => {
    // setIsChecked(!isChecked);
    // onItemCheck(item.produkID, !isChecked);
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    onItemCheck(item.produkID, newIsChecked, item.calculatedPrice * quantity);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    onQuantityChange(item.produkID, newQuantity, calculatedPrice);
    // Optionally, update the localStorage with the new quantity
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.map((cartItem) =>
      cartItem.produkID === item.produkID
        ? { ...cartItem, jumlah: newQuantity }
        : cartItem
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="lg:pt-7 md:py-[15px] py-2">
      <div className="w-full h-[86px] md:h-[119px] border border-gray border-opacity-30 md:rounded-lg rounded-md  lg:h-[220px]">
        <div className="flex felx-row items-center justify-between  lg:px-10 lg:py-7 md:p-[15px]  px-3 py-1 ">
          <div className="flex flex-row items-center">
            <button
              className={`lg:w-10 lg:h-10 border w-[15px] h-[15px] md:w-5 md:h-5 border-gray rounded-sm lg:rounded-lg flex items-center justify-center ${
                isChecked ? "bg-primary" : ""
              }`}
              onClick={handleClick}
            >
              {isChecked ? <img src={CheckIcon} alt="check" /> : ""}
            </button>
            <div className="lg:w-[25px]"></div>
            <div className="flex flex-row">
              <div className="flex items-center">
                <img
                  src={`${imageURl}${item.image_produk}`}
                  // src={CartImage}
                  className="lg:h-[180px] lg:w-[200px]  h-[66px] w-[71px] md:w-[122px] md:h-[79px] object-contain"
                  alt="carrot"
                />
              </div>
              <div className="hidden lg:block" style={{ width: 25 }}></div>
              <div className="flex flex-col items-start lg:w-[724px]">
                <div className="font-inter font-semibold text-black lg:text-[30px] text-[14px] md:text-[20px] w-[190px] md:w-[400px] lg:w-[724px] h-[20px] md:h-[25px] lg:h-[50px] overflow-hidden text-start">
                  {item.nama_produk}
                </div>
                <div className="font-inter font-medium text-black lg:text-[20px] text-[10px] md:text-[14px] w-[190px] md:w-[400px] lg:w-[724px] h-[28px] md:h-[42px] lg:h-[65px] overflow-hidden text-start">
                  {item.deskripsi_produk}
                </div>
                <div className="font-inter pt-1 lg:pt-4 font-semibold text-black text-start lg:text-[30px] text-[12px] md:text-[16px] lg:tetx-[30px]">
                  Rp{" "}
                  {item.calculatedPrice !== undefined
                    ? (item.calculatedPrice * quantity).toLocaleString()
                    : "Loading..."}
                </div>
              </div>
            </div>
          </div>
          <div className="px-5">
            <PlusMinusProduct
              quantity={quantity}
              onQuantityChange={handleQuantityChange}
              maxQuantity={item.jumlah_stok}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCart;
