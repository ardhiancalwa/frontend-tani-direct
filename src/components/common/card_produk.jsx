import React, { useEffect, useState } from "react";
// import imageDummy from "../../assets/images/sayur.jpg";
import starIcon from "../../assets/images/star.svg";
import buyIcon from "../../assets/images/buy.svg";
import bookmarkIcon from "../../assets/images/bookmark.svg";
import bookmarkIconFilled from "../../assets/images/bookmark_fill2.svg";
import Skeleton from "../../components/common/skeleton";

const CardProduct = ({ product }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);
  const cloudinaryBaseURL = process.env.REACT_APP_IMAGE_URL;
  const imageUrl = "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";

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
    }
    setIsBookmarked((prev) => !prev);
    console.log(product.image_produk);
  };

  useEffect(() => {
    if (product) {
      setLoading(false);
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      setIsBookmarked(
        bookmarks.some((item) => item.produkID === product.produkID)
      );
    }
  }, [product]);

  if (loading) {
    return (
      <div className="max-w-sm bg-white border border-black rounded-xl">
        <div className="p-[5px] lg:p-6">
          <Skeleton className="w-[100px] h-[84px] lg:w-[350px] lg:h-[305px] rounded" />
        </div>
        <div className="p-[5px] lg:p-6">
          <Skeleton className="h-6 w-3/4 mb-2 rounded" />
          <div className="flex flex-row items-center">
            <Skeleton className="h-6 w-1/2 mr-2 rounded" />
            <Skeleton className="h-6 w-1/4 rounded" />
          </div>
          <div className="lg:h-[12px] h-[5px]" />
          <div className="flex flex-row items-center justify-start">
            <Skeleton className="w-[12px] h-[12px] lg:w-[24px] lg:h-[24px] rounded-full" />
            <div style={{ width: 12 }} />
            <Skeleton className="h-6 w-1/4 rounded" />
          </div>
          <div className="lg:h-[12px] h-[5px]" />
          <div className="flex flex-row justify-between">
            <Skeleton className="w-[78px] h-[18px] lg:w-[261px] lg:h-[55px] rounded-full" />
            <div className="w-[6px] lg:w-[30px]" />
            <Skeleton className="w-[20px] h-[20px] lg:w-[55px] lg:h-[55px] rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[110px] h-[190px] md:w-[188px] md:h-[282px] lg:w-[400px] lg:h-[585px] bg-white border border-gray border-opacity-30 rounded-xl">
      <button
        className="p-[5px] md:p-[13px] lg:p-4"
        onClick={() => (window.location.href = `/detailProduct/${product.produkID}` )}
      >
        <img
          // src={`/static/${product.image_produk}`}
          src={`${imageUrl}${product.image_produk}`}
          alt={product.nama_produk}
          // onError={handleImageError}
          className="w-[100px] h-[84px] md:w-[158px] md:h-[118px] lg:w-[350px] lg:h-[305px] object-cover"
        />
      </button>
      <div className="py-[5px] px-[5px] md:px-[15px] md:py-[10px] lg:px-6">
        <h2 className="w-[100px] h-[20px] md:w-[158px] md:h-[24px] lg:w-[350px] lg:h-[62px] font-inter text-[8px] md:text-[12px] lg:text-[25px] text-black font-semibold text-start">
          {product.nama_produk}
        </h2>
        <div className="flex flex-row items-center py-[5px] md:py-[7px] lg:py-[12px]">
          <span className="font-inter font-semibold text-primary text-[8px] md:text-[12px] lg:text-[25px]">
            Rp {product.harga.toLocaleString()}
          </span>
          <div className="w-[5px] md:w-[7px] lg:w-[10px]" />
          <span className="font-inter text-[6px] md:text-[10px] lg:text-[20px] font-medium text-gray opacity-50 line-through">
            Rp {(product.harga + 150000).toLocaleString()}
          </span>
        </div>
        {/* <div className="lg:h-[12px] h-[5px]" /> */}
        <div className="flex flex-row items-center justify-start pb-[5px] lg:pb-[12px]">
          <img
            src={starIcon}
            alt="star"
            className="w-[12px] h-[12px] md:w-[18px] md:h-[18px] lg:w-[24px] lg:h-[24px]"
          />
          <div style={{ width: 12 }} />
          <span className="font-inter font-semibold text-[8px] md:text-[14px] lg:text-[20px]">
            <span className="text-yellow">4.9</span>
            <span className="text-yellow ml-1">/ 5</span>
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <button
            className="w-[78px] h-[18px] md:w-[116px] md:h-[28px] lg:w-[261px] lg:h-[55px] flex flex-row justify-center items-center border-[1px] lg:border-2 border-gray border-opacity-50 rounded-full lg:pt-4 lg:pb-4 transition-all duration-300 ease-in-out transform hover:scale-95 hover:border-opacity-100 active:scale-95 active:bg-gray-200"
            onClick={() =>
              (window.location.href = `/detailProduct/${product.produkID}`)
            }
          >
            <img
              src={buyIcon}
              alt="buy icon"
              className="w-[8px] h-[8px] md:w-[12px] md:h-[12px] lg:w-[24px] lg:h-[24px] transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <div style={{ width: 10 }} />
            <span className="font-inter font-semibold text-black text-[5px] md:text-[10px] lg:text-[16px]">
              Beli Sekarang
            </span>
          </button>

          <div className="w-[6px] md:w-[14px] lg:w-[30px]" />
          <button
            className="flex items-center justify-center w-[20px] h-[20px] md:w-[28px] md:h-[28px] lg:w-[58px] lg:h-[55px] border border-gray border-opacity-50 rounded-full hover:border-opacity-100 active:bg-gray-200"
            onClick={handleBookmarkClick}
          >
            <img
              src={isBookmarked ? bookmarkIconFilled : bookmarkIcon}
              alt="bookmark icon"
              className="w-[8px] h-[8px] md:w-[12px] md:h-[12px] lg:w-[24px] lg:h-[24px] transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
