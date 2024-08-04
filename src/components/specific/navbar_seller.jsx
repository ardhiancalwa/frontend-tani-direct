import React, { useEffect, useState } from "react";
import CartIcon from "../../assets/images/cart.svg";
import Logo from "../../assets/images/logo.png";

const NavbarPetani = ({ className }) => {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Mendapatkan data keranjang dari localStorage dan memperbarui jumlah item
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItemCount(cart.length);
  }, []);
  return (
    <div className="flex flex-row justify-center">
      <nav className={`bg-white fixed py-2 z-50 ${className}`}>
        <div className="max-w-full flex row-auto items-center justify-between md:border-b border-gray md:pb-3 lg:pb-5 lg:px-3 w-[390px] md:w-[748px] lg:w-[1440px]">
          <a href="/home">
            <div className="text-black w-[40px] h-[23px] md:w-[100px] md:h-[56px] font-semibold font-inter">
              <img src={Logo} alt="logo tani direct" />
            </div>
          </a>
          <div className="flex items-center justify-between w-auto pt-2 pr-4 order-1">
            <ul className="flex font-semibold font-inter text-primary text-[8px] md:text-[16px] lg:text-h5">
              <li className="w-[45px] h-[10px] md:w-[82px] md:h-[37px] lg:w-[131px] lg:h-[44px] bg-white hover:bg-primary50 flex items-center justify-center rounded-md">
                <a
                  href="/homeseller"
                  className="block text-primary700 lg:py-2 py-[2px] px-[4px] lg:px-3 text-gray-900 rounded"
                  aria-current="page"
                >
                  Products
                </a>
              </li>
              <li className="w-[60px] h-[10px] md:w-[120px] md:h-[37px] lg:w-[170px] lg:h-[44px] bg-white hover:bg-primary50 flex items-center justify-center rounded-md">
                <a
                  href="/marketpriceseller"
                  className="block text-primary700 lg:py-2 py-[2px] px-[4px] lg:px-3 text-gray-900 rounded"
                >
                  Market Price
                </a>
              </li>
              <li className="w-[45px] h-[10px] md:w-[90px] md:h-[37px] lg:w-[130px] lg:h-[44px] bg-white hover:bg-primary50 flex items-center justify-center rounded-md">
                <a
                  href="/wishlistseller"
                  className="block text-primary700 lg:py-2 py-[2px] px-[4px] lg:px-3 text-gray-900 rounded"
                >
                  Wishlist
                </a>
              </li>
              <li className="w-[45px] h-[10px] md:w-[64px] md:h-[37px] lg:w-[100px] lg:h-[44px] bg-white hover:bg-primary50 flex items-center justify-center rounded-md">
                <a
                  href="/profileseller"
                  className="block text-primary700 lg:py-2 py-[2px] px-[4px] lg:px-3 text-gray-900 rounded"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>
          <button
            className="order-2 w-[20px] h-[20px] md:w-[35px] md:h-[35px] lg:w-[41px] lg:h-[41px]`"
            onClick={() => (window.location.href = "/cart")}
          >
            <img src={CartIcon} alt="cart" />
          </button>
          {cartItemCount > 0 && (
            <div className="absolute top-2 right-0  md:top-4 lg:right-2 w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-primary text-white rounded-full flex items-center justify-center font-inter text-[8px] md:text-sm lg:text-base">
              {cartItemCount}
            </div>
          )}
        </div>
      </nav>
      <div className="h-[20px] lg:h-[50px]"></div>
    </div>
  );
};
export default NavbarPetani;
