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
      toast("Add to Wishlist", {
        icon: "✅",
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
    <div className="w-full h-auto bg-white border md:border-2 border-gray border-opacity-40 rounded-lg md:rounded-xl 2xl:rounded-[30px] transition-transform duration-300 ease-in-out hover:scale-[1.03]">
      <div className="p-[2vw] 2xl:p-[1vw]">
        <div>
          {product.image_produk.slice(0, 1).map((image, index) => (
            <img
              src={`${imageUrl}${image}`}
              alt={`${product.nama_produk} ${index + 1}`}
              className="w-[25vw] h-[20vw] md:w-[25vw] md:h-[20vw] lg:w-[25vw] lg:h-[20vw] xl:w-[25vw] 2xl:w-[20vw] 2xl:h-[15vw] rounded-md md:rounded-lg 2xl:rounded-[20px] object-cover"
            />
          ))}
        </div>
        <div className="mt-2">
          <h2 className="overflow-auto font-inter text-[0.6rem] md:text-[1rem] lg:text-[1.4rem] xl:text-[1.8rem] 2xl:text-[2rem] text-black font-semibold text-start line-clamp-1">
            {product.nama_produk}
          </h2>
          <div className="flex flex-row items-center py-[0.5vw] md:py-[0.5vw] lg:py-[1vw] xl:py-[0.5vw] 2xl:py-[12px]">
            <span className="font-inter font-semibold text-primary text-[0.45rem] md:text-[0.7rem] lg:text-[1.1rem] xl:text-[1.4rem] 2xl:text-[1.5rem]">
              Rp {product.harga.toLocaleString("id-ID")}
            </span>
            <div className="w-[5px] md:w-[7px] lg:w-[10px]" />
            <span className="font-inter text-[0.38rem] md:text-[0.5rem] lg:text-[0.65rem] xl:text-[0.8rem] 2xl:text-[1rem] font-medium text-gray opacity-50 line-through">
              Rp {(product.harga + 150000).toLocaleString("id-ID")}
            </span>
          </div>
          <div className="flex flex-row items-center justify-start mt-[0.5vw] md:mt-[1vw] lg:mt-[0.2vw]">
            <img
              src={starIcon}
              alt="star"
              className="w-[2.5vw] md:w-[2vw] md:h-[2vw] lg:w-[2vw] lg:h-[2vw] xl:w-[1.8vw] xl:h-[1.8vw] 2xl:w-[1.5vw] 2xl:h-[1.5vw] "
            />
            <span className="font-inter font-semibold ml-1 xl:ml-2 text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem]">
              <span className="text-yellow">4.9</span>
              <span className="text-yellow ml-1">/ 5</span>
            </span>
          </div>
          <div className="flex flex-row justify-between items-center mt-[1vw] md:mt-[2vw] lg:py-[0.5vw] xl:py-[0.2vw] 2xl:py-[0.5vw]">
            <button
              className="w-[18vw] h-[5vw] md:w-[17vw] md:h-[4vw] lg:w-[16.5vw] lg:h-[4.5vw] xl:w-[18vw] xl:h-[4vw] 2xl:w-[14vw] 2xl:h-[3vw] flex flex-row justify-center items-center border-[1px] lg:border-2 border-gray border-opacity-30 rounded-full lg:pt-4 lg:pb-4 hover:border-opacity-40 active:scale-95 active:bg-gray-200"
              onClick={() =>
                (window.location.href = `/detailProduct/${product.produkID}`)
              }
            >
              <img
                src={buyIcon}
                alt="buy icon"
                className="w-[2.5vw] h-[2.5vw] md:w-[2vw] md:h-[2vw] lg:w-[2vw] lg:h-[2vw] xl:w-[2vw] xl:h-[2vw] 2xl:w-[1.5vw] 2xl:h-[1.5vw]"
              />
              <span className="ml-1 md:ml-2 2xl:ml-4 font-inter font-semibold text-black text-[0.4rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1.2rem] 2xl:text-[1.3rem]">
                Beli Sekarang
              </span>
            </button>
            <button
              className="flex items-center justify-center w-[5vw] h-[5vw] md:w-[4vw] md:h-[4vw] lg:w-[4.5vw] lg:h-[4.5vw] xl:w-[4vw] xl:h-[4vw] 2xl:w-[3vw] 2xl:h-[3vw] border border-gray border-opacity-30 rounded-full hover:border-opacity-40 active:bg-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-[1.01]"
              onClick={handleBookmarkClick}
            >
              <img
                src={isBookmarked ? bookmarkIconFilled : bookmarkIcon}
                alt="bookmark icon"
                className="w-[2vw] h-[2vw] md:w-[2vw] md:h-[2vw] lg:w-[2vw] lg:h-[2vw] xl:w-[2vw] xl:h-[2vw] 2xl:w-[24px] 2xl:h-[24px] "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
