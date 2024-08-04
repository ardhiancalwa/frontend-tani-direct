import React from "react";

import ImageDummy from "../../assets/images/sayur.jpg";
import BookmarkFill from "../../assets/images/bookmark_fill.svg";

const CardWishList = ({ product }) => {
  return (
    <div className="lg:py-[25px] md:py-4 py-[10px]">
      <div className="min-w-full w-[350px] h-[85px] md:w-[604px] md:h-[141px] lg  :w-[1240px] lg:h-[260px] flex flex-row md:p-2 row-auto border border-gray border-opacity-50 rounded-xl overflow-hidden">
        <div className="flex items-center px-[15px] py-[10px]">
          <img
            src={product.image_produk}
            alt="sayur"
            className="lg:w-[350px] lg:h-[212px] md:w-[170px] md:h-[121px] w-[85px] h-[62px] object-fill"
          />
        </div>
        <div className="flex flex-col w-full lg:p-6 p-3">
          <div className="flex flex-row justify-between gap-2">
            <h2
              className="font-inter font-semibold text-black lg:text-[32px] md:text-[16px] text-[14px] text-start"
              style={{ lineHeight: 1.2 }}
            >
              {product.nama_produk}
            </h2>
            <div className="flex items-center justify-center bg-gray bg-opacity-15 rounded-full sm:p-[5px] lg:w-[40px] lg:h-[40px] md:w-[25px] md:h-[25px] w-[20px] h-[20px] md:p-[7px]  p-[5px]">
              <img
                src={BookmarkFill}
                className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] lg:w-[15px] lg:h-[15px]"
                alt="bookmark fill"
              />
            </div>
          </div>
          <div className="lg:block hidden" style={{ height: 12 }} />
          <p className="font-inter font-medium w-[195px] h-[24px] md:w-[390px] md:h-[51px] lg:w-[746px] lg:h-[121px] text-black text-start lg:text-[20px] text-[10px] mt-1 md:text-[0.9rem]  overflow-hidden">
            {product.deskripsi_produk}
          </p>
          <div className="lg:block hidden" style={{ height: 12 }} />
          <div className="flex flex-row row-auto items-center">
            <span className="font-inter font-bold text-primary  lg:text-[30px] text-[12px]  md:text-[20px]">
              Rp {product.harga.toLocaleString()}
            </span>
            <div style={{ width: 10 }} />
            <span className="font-inter font-normal text-gray text-opacity-50 line-through lg:text-[20px] text-[10px] md:text-[16px]">
              Rp {(product.harga + 150000).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWishList;
