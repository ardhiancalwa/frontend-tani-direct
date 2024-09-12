import React, { useState } from "react";

// import CartImage from "../../assets/images/carrot.jpg";
import PlusMinusProduct from "./button_plusminus_product";
import CheckIcon from "../../assets/images/check5.svg";

const ContainerCart = ({ item, onItemCheck, onQuantityChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(item.jumlah);
  const [calculatedPrice, setCalculatedPrice] = useState(item.calculatedPrice);
  const imageURl = "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  const handleClick = () => {
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
      <div className="w-full h-auto border border-gray border-opacity-30 md:rounded-lg rounded-md">
        <div className="flex felx-row items-center justify-between  lg:px-10 lg:py-7 md:p-[15px] p-3">
          <div className="flex flex-row items-center ju">
            <button
              className={`2xl:w-10 2xl:h-10 border w-[15px] h-[15px] md:w-5 md:h-5 lg:w-8 lg:h-8 border-gray rounded-sm lg:rounded-lg flex items-center justify-center ${
                isChecked ? "bg-primary" : ""
              }`}
              onClick={handleClick}
            >
              {isChecked ? <img src={CheckIcon} className="w-4 h-4 md:w-5 md:h-5  2xl:w-6 2xl:h-6" alt="check" /> : ""}
            </button>
            <div className="flex flex-row">
              <div className="flex items-center px-[10px] md:px-[15px] lg:px-[25px] ">
                <img
                  src={`${imageURl}${item.image_produk}`}
                  // src={CartImage}
                  className="2xl:h-[180px] 2xl:w-[200px] lg:w-[160px] lg:h-[130px] rounded-md 2xl:rounded-xl h-[66px] w-[85px] md:w-[130px] md:h-[100px] object-cover"
                  alt="carrot"
                />
              </div>
              <div className="flex flex-col items-start w-[100px] md:w-[300px] h-auto lg:w-[400px] 2xl:w-[724px]">
                <div className="font-inter font-semibold text-black lg:text-[26px] 2xl:text-[30px] text-[12px] md:text-[20px] w-full md:w-auto h-auto lg:w-full overflow-hidden text-start">
                  {item.nama_produk}
                </div>
                <div className="font-inter font-medium text-black lg:text-[20px] text-[8px] md:text-[14px] w-full overflow-hidden md:w-[250px] lg:w-full h-auto md:h-auto text-start">
                  {item.deskripsi_produk}
                </div>
                <div className="font-inter pt-1 lg:pt-4 font-semibold text-black text-start lg:text-[24px] text-[12px] md:text-[16px] 2xl:text-[30px]">
                  Rp{" "}
                  {item.calculatedPrice !== undefined
                    ? (item.calculatedPrice * quantity).toLocaleString('id-ID')
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
