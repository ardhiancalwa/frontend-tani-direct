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
    <div className="lg:pt-7 md:py-[1vw] py-1">
      <div className="w-full h-auto border border-gray border-opacity-30 md:rounded-lg rounded-lg">
        <div className="flex felx-row items-center justify-between lg:px-6 md:p-[15px] p-3">
          <div className="flex flex-row items-center ju">
            <button
              className={`2xl:w-[2.5vw] 2xl:h-[2vw] border w-[15vw] h-[5vw] md:w-[8vw] md:h-[2.5vw] lg:w-[8vw] lg:h-[3vw] border-gray rounded-sm lg:rounded-lg flex items-center justify-center ${
                isChecked ? "bg-primary" : ""
              }`}
              onClick={handleClick}
            >
              {isChecked ? <img src={CheckIcon} className="w-4 h-4 md:w-5 md:h-5 2xl:w-6 2xl:h-6" alt="check" /> : ""}
            </button>
            <div className="flex flex-row">
              <div className="flex items-center px-[10px] md:px-[15px] lg:px-[25px] ">
                <img
                  src={`${imageURl}${item.image_produk[0]}`}
                  // src={CartImage}
                  className="2xl:h-[8vw] 2xl:w-[18vw] lg:w-[30vw] lg:h-[13vw] rounded-md 2xl:rounded-xl h-[15vw] w-[40vw] md:w-[30vw] md:h-[12vw] object-cover"
                  alt="carrot"
                />
              </div>
              <div className="flex flex-col items-start w-full h-auto">
                <div className="font-inter font-semibold text-black lg:text-[1.5rem] 2xl:text-[30px] text-[12px] md:text-[20px] w-full h-auto  overflow-hidden text-start">
                  {item.nama_produk}
                </div>
                <div className="font-inter font-medium text-black lg:text-[1rem] text-[0.5rem] md:text-[0.8rem] w-full overflow-hidden h-auto md:h-auto text-start line-clamp-2">
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
