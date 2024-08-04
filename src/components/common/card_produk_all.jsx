import React, { useState } from "react";
import imageDummy from "../../assets/images/sayur.jpg";
import starIcon from "../../assets/images/star.svg";
import buyIcon from "../../assets/images/buy.svg";
import bookmarkIcon from "../../assets/images/bookmark.svg";
import bookmarkIconFilled from "../../assets/images/bookmark_fill2.svg"; // Add the filled bookmark icon

const CardProductAll = ({ product }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const imageUrl = "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  const handleBookmarkClick = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div className="max-w-sm bg-white w-[165px] lg:w-full  ">
      <div className="p-[5px]">
        <img
          // src={product.image_produk}
          src={`${imageUrl}${product.image_produk}`}
          className=" lg:p-3 w-[145px] h-[117px] border border-gray border-opacity-50 rounded-[10px] lg:w-[295px] lg:h-[280px] object-cover"
          alt={product.nama_produk}
        />
      </div>
      <div className="p-[10px] lg:p-6">
        <div className="font-inter text-[10px] lg:text-[25px] text-black font-semibold text-start">
          {product.nama_produk}
        </div>
        <div className="flex flex-row row-auto items-center">
          <div
            className={`font-inter font-bold text-primary ${
              product.harga > 1000000
                ? "text-[10px] lg:text-[19px]"
                : "text-[10px] lg:text-[24px] lg:leading-normal"
            }`}
          >
            Rp {product.harga.toLocaleString()}
          </div>
          <div className="w-[5px] lg:w-[10px] "></div>
          <div
            className={`font-inter font-semibold text-gray ${
              product.harga > 1000000
                ? "text-[8px] lg:text-[15px]"
                : "text-[10px] lg:text-[15px] lg:leading-normal"
            } line-through`}
          >
            Rp {(product.harga + 50000).toLocaleString()}
          </div>
        </div>
        <div className="lg:h-[12px] h-[5px] "></div>
        <div className="flex flex-row row-auto items-center justify-start">
          <img
            src={starIcon}
            className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]"
            alt="star"
          />
          <div style={{ width: 12 }}></div>
          <div className="font-inter font-semibold text-[10px] lg:text-[24px]">
            <span className="text-yellow">4.9</span>
            <span className="text-yellow ml-1">/ 5</span>
          </div>
        </div>
        <div className="lg:h-[12px] h-[5px] "></div>
        <div className="flex flex-row row-auto">
          <div>
            <button
              className="w-[120px] h-[18px] lg:w-[200px] lg:h-[55px] flex flex-row justify-center items-center border-[1px] lg:border-2 border-gray border-opacity-20 rounded-full lg:pt-4 lg:pb-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-opacity-100 active:scale-95 active:bg-gray-200"
              onClick={() =>
                (window.location.href = `/detailproduct/${product.produkID}`)
              }
            >
              <img
                src={buyIcon}
                alt="buy icon"
                className="w-[8px] h-[8px] lg:w-[24px] lg:h-[24px] transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <div style={{ width: 10 }} />
              <span className="font-inter font-semibold text-black text-[5px] lg:text-[16px]">
                Beli Sekarang
              </span>
            </button>
          </div>
          <div className="w-[6px] lg:w-[30px] "></div>
          <div>
            <button
              className="flex items-center justify-center w-[20px] h-[20px] lg:w-[55px] lg:h-[55px] border border-gray border-opacity-20 rounded-full hover:border-opacity-100 active:bg-gray-200"
              onClick={handleBookmarkClick}
            >
              <img
                src={isBookmarked ? bookmarkIconFilled : bookmarkIcon}
                alt="bookmark icon"
                className="w-[8px] h-[8px] lg:w-[24px] lg:h-[24px] transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductAll;
