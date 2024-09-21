import React from "react";
import starIcon from "../../assets/images/star.svg";
import buyIcon from "../../assets/images/buy.svg";
import bookmarkIcon from "../../assets/images/bookmark.svg";
import bookmarkIconFilled from "../../assets/images/bookmark_fill2.svg"; // Add the filled bookmark icon

const CardProductAll = ({ product, onBookmarkClick, isBookmarked }) => {
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  return (
    <div className="flex flex-col w-auto bg-white lg:w-full transition-all border border-gray border-opacity-30 hover:border-opacity-50 rounded-lg md:rounded-xl 2xl:rounded-[25px] duration-300 ease-in-out transform hover:scale-[1.01]">
      <div className=" p-[2.5vw] md:p-[1vw] lg:p-[1.2vw] 2xl:p-[1vw]">
        {product.image_produk.slice(0, 1).map((image, index) => (
          <img
            src={`${imageUrl}${image}`}
            alt={`${product.nama_produk} ${index + 1}`}
            className="w-[38vw] h-[30vw] md:w-[18vw] md:h-[16vw] lg:w-[18vw] lg:h-[14vw] xl:w-[20vw] xl:h-[15vw] 2xl:w-[15vw] 2xl:h-[12vw] rounded-md md:rounded-lg 2xl:rounded-[20px] object-cover"
          />
        ))}
        <div className="py-2 md:py-0 md:pt-2 md:pb-0 lg:px-1 lg:py-0 lg:pt-3 lg:pb-0 2xl:p-2">
          <div className="font-inter text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.5rem] 2xl:text-[1.4rem] text-black font-semibold text-start line-clamp-1">
            {product.nama_produk}
          </div>
          <div className="flex flex-row row-auto items-center mt-[1vw] md:mt-[0.6vw] xl:mt-[0.2vw]">
            <div
              className={`font-inter font-bold text-primary ${
                product.harga > 1000000
                  ? "text-[0.6rem] md:text-[0.6rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.8rem]"
                  : "text-[0.6rem] md:text-[0.7rem] lg:text-[0.85rem] xl:text-[1rem] 2xl:text-[1rem] lg:leading-normal"
              }`}
            >
              Rp {product.harga.toLocaleString("id-ID")}
            </div>
            <div
              className={`font-inter font-semibold text-gray ${
                product.harga > 1000000
                  ? "text-[0.4rem] md:text-[0.4rem] lg:text-[0.5rem] xl:text-[0.7rem] 2xl:text-[0.6rem]"
                  : "text-[0.5rem] md:text-[0.5rem] lg:text-[0.65rem] xl:text-[0.75rem] 2xl:text-[0.8rem] lg:leading-normal"
              } line-through ml-[1vw] xl:ml-[0.6vw]`}
            >
              Rp {(product.harga + 50000).toLocaleString("id-ID")}
            </div>
          </div>
          <div className="mt-[1vw] md:mt-[0.6vw] 2xl:mt-[0.4vw] flex flex-row row-auto items-center justify-start">
            <img
              src={starIcon}
              className="w-[3vw] h-[3vw] md:w-[2vw] md:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw] xl:w-[1.5vw] xl:h-[1.5vw] 2xl:w-[1vw] 2xl:h-[1vw]"
              alt="star"
            />
            <div className="ml-[1vw] md:ml-[0.8vw] 2xl:ml-[0.4vw] font-inter font-semibold text-[0.68rem] md:text-[0.7rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[rem]">
              <span className="text-yellow">4.9</span>
              <span className="text-yellow ml-1">/ 5</span>
            </div>
          </div>
          <div className="flex flex-row row-auto justify-between items-center mt-[3vw] md:mt-[1vw]">
            <div>
              <button
                className="w-[28vw] h-[6vw] md:w-[13.5vw] md:h-[3.5vw] lg:w-[13vw] lg:h-[3vw] xl:w-[14vw] xl:h-[3.5vw] 2xl:w-[10vw] 2xl:h-[2.5vw] flex flex-row justify-center items-center border-[1px] lg:border-2 border-gray border-opacity-30 rounded-full lg:pt-4 lg:pb-4 transition-all duration-300 ease-in-out transform hover:scale-100 hover:border-opacity-50 active:scale-95 shadow-sm"
                onClick={() =>
                  (window.location.href = `/detailproduct/${product.produkID}`)
                }
              >
                <img
                  src={buyIcon}
                  alt="buy icon"
                  className="w-[3.5vw] h-[3.5vw] md:w-[1.8vw] md:h-[1.8vw] lg:w-[1.5vw] lg:h-[1.5vw] 2xl:w-[1.2vw] 2xl:h-[1.2vw] transition-transform duration-300 ease-in-out transform hover:scale-[1.02]"
                />
                <span className="ml-[1vw] md:ml-[1vw] 2xl:ml-[0.5vw] font-inter font-semibold text-black text-[0.6rem] lg:text-[12px] 2xl:text-[1rem]">
                  Beli Sekarang
                </span>
              </button>
            </div>
            <div className="ml-[1vw]">
              <button
                className="flex items-center justify-center w-[6vw] h-[6vw] md:w-[3.5vw] md:h-[3.5vw] lg:w-[3.5vw] lg:h-[3.5vw] 2xl:w-[2.5vw] 2xl:h-[2.5vw] border border-gray border-opacity-40 rounded-full hover:border-opacity-50 transition-transform duration-300 ease-in-out transform hover:scale-100 shadow-sm"
                onClick={() => onBookmarkClick(product)}
              >
                <img
                  src={isBookmarked ? bookmarkIconFilled : bookmarkIcon}
                  alt="bookmark icon"
                  className="w-[3vw] h-[3vw] md:w-[1.5vw] md:h-[1.5vw] lg:w-[1.5vw] lg:h-[1.5vw] 2xl:w-[24px] 2xl:h-[24px]"
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
