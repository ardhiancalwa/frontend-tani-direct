import React, { useState } from "react";
import imageDummy from "../../assets/images/sayur.jpg";
import starIcon from "../../assets/images/star.svg";
import buyIcon from "../../assets/images/buy.svg";
import bookmarkIcon from "../../assets/images/bookmark.svg";
import bookmarkIconFilled from "../../assets/images/bookmark_fill2.svg"; // Add the filled bookmark icon

const CardProductAll = ({ product, onBookmarkClick, isBookmarked }) => {
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  return (
    <div className="flex flex-col w-auto bg-white lg:w-full transition-all border border-gray border-opacity-30 hover:border-opacity-50 rounded-lg md:rounded-xl 2xl:rounded-[25px] duration-300 ease-in-out transform hover:scale-[1.01]">
      <div className="2xl:p-7 md:p-3 lg:p-4 p-2">
        <img
          src={`${imageUrl}${product.image_produk}`}
          alt={product.nama_produk}
          className="w-[150px] h-[150px] md:w-[158px] md:h-[118px] lg:w-[300px] lg:h-[150px] xl:h-[185px] 2xl:w-[295px] 2xl:h-[280px] rounded-lg md:rounded-xl 2xl:rounded-[18px] object-cover"
        />
        <div className="py-2 md:py-0 md:pt-2 md:pb-0 lg:px-1 lg:py-0 lg:pt-3 lg:pb-0 2xl:p-2">
          <div className="font-inter text-[14px] md:text-[16px] lg:text-[22px] xl:text-[20px] 2xl:text-[25px] text-black font-semibold text-start line-clamp-1">
            {product.nama_produk}
          </div>
          <div className="flex flex-row row-auto items-center">
            <div
              className={`font-inter font-bold text-primary ${
                product.harga > 1000000
                  ? "text-[10px] lg:text-[12px] 2xl:text-[19px]"
                  : "text-[10px] md:text-[10px] lg:text-[16px] 2xl:text-[24px] lg:leading-normal"
              }`}
            >
              Rp {product.harga.toLocaleString('id-ID')}
            </div>
            <div className="w-[5px] 2xl:w-[10px] "></div>
            <div
              className={`font-inter font-semibold text-gray ${
                product.harga > 1000000
                  ? "text-[8px] lg:text-[10px] 2xl:text-[15px]"
                  : "text-[10px] lg:text-[12px] 2xl:text-[15px] lg:leading-normal"
              } line-through`}
            >
              Rp {(product.harga + 50000).toLocaleString('id-ID')}
            </div>
          </div>
          <div className="2xl:h-[12px] lg:h-[8px] h-[5px] "></div>
          <div className="flex flex-row row-auto items-center justify-start">
            <img
              src={starIcon}
              className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[16px] lg:h-[16px]"
              alt="star"
            />
            <div style={{ width: 12 }}></div>
            <div className="font-inter font-semibold text-[10px] md:text-[12px] lg:text-[14px]">
              <span className="text-yellow">4.9</span>
              <span className="text-yellow ml-1">/ 5</span>
            </div>
          </div>
          <div className="2xl:h-[12px] lg:h-[8px] md:h-[10px] h-[5px] "></div>
          <div className="flex flex-row row-auto justify-between items-center">
            <div>
              <button
                className="w-[100px] h-[30px] md:w-[95px] lg:w-[130px] lg:h-[30px] 2xl:w-[200px] 2xl:h-[55px] flex flex-row justify-center items-center border-[1px] lg:border-2 border-gray border-opacity-30 rounded-full lg:pt-4 lg:pb-4 transition-all duration-300 ease-in-out transform hover:scale-100 hover:border-opacity-50 active:scale-95 shadow-sm"
                onClick={() =>
                  (window.location.href = `/detailproduct/${product.produkID}`)
                }
              >
                <img
                  src={buyIcon}
                  alt="buy icon"
                  className="w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] 2xl:w-[24px] 2xl:h-[24px] transition-transform duration-300 ease-in-out transform hover:scale-[1.02]"
                />
                <div style={{ width: 10 }} />
                <span className="font-inter font-semibold text-black text-[8px] lg:text-[12px] 2xl:text-[16px]">
                  Beli Sekarang
                </span>
              </button>
            </div>
            <div className="w-[6px] lg:w-[15px] 2xl:w-[30px] "></div>
            <div>
              <button
                className="flex items-center justify-center w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] 2xl:w-[55px] 2xl:h-[55px] border border-gray border-opacity-40 rounded-full hover:border-opacity-50 transition-transform duration-300 ease-in-out transform hover:scale-100 shadow-sm"
                onClick={() => onBookmarkClick(product)}
              >
                <img
                  src={isBookmarked ? bookmarkIconFilled : bookmarkIcon}
                  alt="bookmark icon"
                  className="w-[12px] h-[12px] lg:w-[18px] lg:h-[18px] 2xl:w-[24px] 2xl:h-[24px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductAll;
