import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CartIcon from "../../assets/images/cart.svg";
import Logo from "../../assets/images/logo.png";
import Cookies from "universal-cookie";

const Navbar = ({ className }) => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const location = useLocation();
  const cookies = new Cookies();
  const tokenPetani = cookies.get("token_petani");

  useEffect(() => {
    // Mendapatkan data keranjang dari localStorage dan memperbarui jumlah item
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItemCount(cart.length);
  }, []);

  const isActive = (path) => { 
    return location.pathname === path
      ? "sm:border-b-2 lg:border-b-16 border-primary "
      : "";
  };

  const generatePath = (path) => {
    return tokenPetani ? `${path}seller` : path;
  };

  return (
    <div className="flex  w-full lg:flex-row justify-center">
      <nav className={`bg-white fixed w-full  ${className} z-50 border-black border-opacity-20 px-[5vw] md:px-[8vw] lg:px-[6vw] xl:px-[5vw]`}>
        <div className=" flex row-auto py-2 md:py-4 items-center justify-between md:border-b border-gray ">
          <a href={"/home"}>
            <div className="text-black w-[40px] h-[23px] md:w-[100px] md:h-[56px] hover:scale-105 active:scale-100 font-semibold font-inter">
              <img src={Logo} alt="logo tani direct" />
            </div>
          </a>
          <div className="px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-48">
            <div className="flex items-center justify-between w-auto pt-2 pr-4 order-1">
              <ul className="flex font-semibold font-inter text-primary text-[8px] md:text-[16px] lg:text-h5">
                <li
                  className={`w-auto h-auto lg:px-4 md:px-2 bg-white hover:bg-primary50 flex items-center justify-center rounded-md`}
                >
                  <a
                    href={"/home"}
                    className={`block text-primary700 lg:py-1 py-[2px] px-[4px] lg:px-3 text-gray-900 ${isActive(
                      "/home"
                    )}`}
                    aria-current="page"
                  >
                    Products
                  </a>
                </li>
                <li className="w-auto h-auto lg:px-4 md:px-2 bg-white hover:bg-primary50 flex items-center justify-center rounded-md">
                  <a
                    href={"/marketprice"}
                    className={`block text-primary700 lg:py-2 py-[2px] px-[4px] lg:px-3 text-gray-900 md: ${isActive(
                      "/marketprice"
                    )}`}
                  >
                    Market Price
                  </a>
                </li>
                <li className="w-auto h-auto lg:px-4 md:px-2 bg-white hover:bg-primary50 flex items-center justify-center rounded-md">
                  <a
                    href={"/wishlist"}
                    className={`block text-primary700 lg:py-2 py-[2px] px-[4px] lg:px-3 text-gray-900 ${isActive(
                      "/wishlist"
                    )}`}
                  >
                    Wishlist
                  </a>
                </li>
                <li className="w-auto h-auto lg:px-4 md:px-2 bg-white hover:bg-primary50 flex items-center justify-center rounded-md">
                  <a
                    href={generatePath("/profile")}
                    className={`block text-primary700 lg:py-2 py-[2px] px-[4px] lg:px-3 text-gray-900 ${isActive(
                      "/profile"
                    )}`}
                  >
                    Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button
            className="order-2 w-[20px] h-[20px] md:w-[35px] md:h-[35px] lg:w-[41px] lg:h-[41px]`"
            onClick={() => (window.location.href = "/cart")}
          >
            <img src={CartIcon} alt="cart" />
          </button>
          {cartItemCount > 0 && (
            <div className="absolute top-[1.8vw] right-[4.8vw] md:top-[2.8vw] md:right-[7.5vw] lg:right-[5.5vw] lg:top-[2vw] xl:right-[4.5vw] xl:top-[1.5vw] 2xl:right-[4.8vw] 2xl:top-[1vw] w-3 h-3 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-primary text-white rounded-full flex items-center justify-center font-inter text-[7px] md:text-sm lg:text-base">
              {cartItemCount}
            </div>
          )}
        </div>
      </nav>
      <div className="h-[20px] lg:h-[50px]"></div>
    </div>
  );
};
export default Navbar;
