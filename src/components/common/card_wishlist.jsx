import React from "react";

import ImageDummy from "../../assets/images/sayur.jpg";
import BookmarkFill from "../../assets/images/bookmark_fill.svg";

const CardWishList = ({ product, onRemoveBookmark }) => {
  const handleRemoveBookmark = () => {
    onRemoveBookmark(product.produkID);
  };
  const imageUrl =
    "https://res.cloudinary.com/dqj2k0khn/image/upload/v1722727432/";
  return (
    <div className="2xl:py-[25px] md:py-3 py-2">
      <div className="min-w-full w-[350px] h-[85px] md:w-[604px] md:h-[141px] lg:w-[900px] lg:h-[200px] 2xl:w-[1240px] 2xl:h-[260px] flex flex-row md:p-2 row-auto border border-gray border-opacity-50 rounded-md md:rounded-xl shadow-sm lg:shadow-md overflow-hidden">
        <div className="flex items-center px-[15px] py-[0px]">
          <img
            src={`${imageUrl}${product.image_produk}`}
            alt="sayur"
            className="2xl:w-[350px] 2xl:h-[212px] rounded-md lg:w-[200px] lg:h-[150px] md:w-[170px] md:h-[105px] w-[85px] h-[62px] object-cover"
          />
        </div>
        <div className="flex flex-col w-full lg:p-4 2xl:p-6 py-2 px-1 md:py-1">
          <div className="flex flex-row justify-between md:gap-2">
            <h2
              className="w-3/4 md:w-full h-auto font-inter font-semibold md:font-bold text-black lg:text-[32px] 2xl:text-[32px] md:text-[16px] text-[14px] text-start"
              style={{ lineHeight: 1.2 }}
            >
              {product.nama_produk}
            </h2>
            <button
              className="flex items-center justify-center active:bg-gray hover:bg-opacity-15 active:rounded-full hover:shadow-md sm:p-[5px] 2xl:w-[50px] 2xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[25px] md:h-[25px] w-[20px] active:scale-95 h-[20px] md:p-[7px] p-[5px]"
              onClick={handleRemoveBookmark}
            >
              <img
                src={BookmarkFill}
                className="w-[6px] h-[8px] md:w-[8px] md:h-[10px] lg:w-[15px] lg:h-[15px] 2xl:w-[22px] 2xl:h-[22px]"
                alt="bookmark fill"
              />
            </button>
          </div>
          <div className="lg:block hidden" style={{ height: 1 }} />
          <p className="font-inter font-medium w-11/12 h-[30px] md:w-full md:h-auto text-black text-start lg:text-[20px] text-[10px] lg:mt-1 md:text-[0.9rem] overflow-hidden">
            {product.deskripsi_produk}
          </p>
          <div className="lg:block hidden" style={{ height: 12 }} />
          <div className="flex flex-row row-auto items-center">
            <span className="font-inter font-bold text-primary lg:text-[22px] 2xl:text-[30px] text-[12px]  md:text-[18px]">
              Rp {product.harga.toLocaleString('id-ID')}
            </span>
            <div style={{ width: 10 }} />
            <span className="font-inter font-normal text-gray text-opacity-50 line-through lg:text-18px 2xl:text-[20px] text-[10px] md:text-[14px]">
              Rp {(product.harga + 150000).toLocaleString('id-ID')}
            </span>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default CardWishList;
