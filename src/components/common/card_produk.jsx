import React, { useEffect, useState } from "react";
// import imageDummy from "../../assets/images/sayur.jpg";
import starIcon from "../../assets/images/star.svg";
import buyIcon from "../../assets/images/buy.svg";
import bookmarkIcon from "../../assets/images/bookmark.svg";
import bookmarkIconFilled from "../../assets/images/bookmark_fill2.svg";
import toast from "react-hot-toast";

const CardProduct = ({ product }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  // const cloudinaryBaseURL = process.env.REACT_APP_IMAGE_URL;
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

  const handleBookmarkClick = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter(
        (item) => item.produkID !== product.produkID
      );
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    } else {
      bookmarks.push(product);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      toast('Add to Wishlist', {
        icon: '✅',
      });
    }
    setIsBookmarked((prev) => !prev);
  };

  useEffect(() => {
    if (product) {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      setIsBookmarked(
        bookmarks.some((item) => item.produkID === product.produkID)
      );
    }
  }, [product]);

  return (
    <div
      className="w-auto h-auto bg-white border md:border-2 border-gray border-opacity-40 rounded-lg md:rounded-xl 2xl:rounded-[30px] transition-transform duration-300 ease-in-out hover:scale-[1.03]"
    >
      <button className="p-[6px] md:p-3 lg:p-6">
        {product.image_produk.slice(0,1).map((image, index)=> (
          <img
          src={`${imageUrl}${image}`}
          alt={`${product.nama_produk} ${index + 1}`}
          className="w-[100px] h-[84px] md:w-[158px] md:h-[118px] lg:w-[300px] lg:h-[200px] 2xl:w-[350px] 2xl:h-[305px] rounded-md md:rounded-lg 2xl:rounded-[20px] object-cover"
        />
        ))}
      </button>
      <div className="py-[0px] px-[7px] md:px-[15px] md:py-[0px] lg:px-6">
        <h2 className="w-[100px] md:w-[158px] lg:w-[230px] h-auto  2xl:h-[100px] overflow-auto font-inter text-[8px] md:text-[14px] lg:text-[25px] 2xl:text-[30px] text-black font-semibold text-start">
          {product.nama_produk}
        </h2>
        <div className="flex flex-row items-center py-[5px] md:py-[0px] lg:py-2 2xl:py-[12px]">
          <span className="font-inter font-semibold text-primary text-[6px] md:text-[12px] lg:text-[18px] 2xl:text-[25px]">
            Rp {product.harga.toLocaleString('id-ID')}
          </span>
          <div className="w-[5px] md:w-[7px] lg:w-[10px]" />
          <span className="font-inter text-[5px] md:text-[10px] lg:text-[14px] 2xl:text-[20px] font-medium text-gray opacity-50 line-through">
            Rp {(product.harga + 150000).toLocaleString('id-ID')}
          </span>
        </div>
        {/* <div className="lg:h-[12px] h-[5px]" /> */}
        <div className="flex flex-row items-center justify-start pb-[0px] 2xl:pb-[12px]">
          <img
            src={starIcon}
            alt="star"
            className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] lg:w-[26px] lg:h-[26px]"
          />
          <div className="w-[8px] lg:w-[12px]" />
          <span className="font-inter font-semibold text-[8px] md:text-[12px] lg:text-[20px]">
            <span className="text-yellow">4.9</span>
            <span className="text-yellow ml-1">/ 5</span>
          </span>
        </div>
        <div className="flex flex-row justify-between items-center py-[6px] md:py-3 lg:py-5 2xl:pt-2 2xl:pb-10">
          <button
            className="w-[70px] h-[18px] md:w-[116px] md:h-[28px] lg:w-[190px] lg:h-[50px] 2xl:w-[285px] 2xl:h-[55px] flex flex-row justify-center items-center border-[1px] lg:border-2 border-gray border-opacity-30 rounded-full lg:pt-4 lg:pb-4 hover:border-opacity-40 active:scale-95 active:bg-gray-200"
            onClick={() =>
              (window.location.href = `/detailProduct/${product.produkID}`)
            }
          >
            <img
              src={buyIcon}
              alt="buy icon"
              className="w-[8px] h-[8px] md:w-[12px] md:h-[12px] lg:w-[24px] lg:h-[24px]"
            />
            <div className="w-[4px] 2xl:w-[10px]"/>
            <span className="font-inter font-semibold text-black text-[5px] md:text-[10px] lg:text-[16px]">
              Beli Sekarang
            </span>
          </button>

          <div className="w-[6px] md:w-[14px] lg:w-[16px] 2xl:w-[20px]" />
          <button
            className="flex items-center justify-center w-[19px] h-[19px] md:w-[28px] md:h-[28px] lg:w-[50px] lg:h-[50px] 2xl:w-[58px] 2xl:h-[55px] border border-gray border-opacity-30 rounded-full hover:border-opacity-40 active:bg-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-[1.01]"
            onClick={handleBookmarkClick}
          >
            <img
              src={isBookmarked ? bookmarkIconFilled : bookmarkIcon}
              alt="bookmark icon"
              className="w-[8px] h-[8px] md:w-[12px] md:h-[12px] lg:w-[20px] lg:h-[20px] 2xl:w-[24px] 2xl:h-[24px] "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
