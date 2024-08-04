import React from "react";

import ProfileReview from "../../assets/images/profile_review.png";
import StarFill from "../../assets/images/star_review_fill.svg";
import Star from "../../assets/images/star_review.svg";

const CardReview = () => {
  return (
    <div className="py-[10px] lg:py-5">
      <div className="w-[350px] h-[92px] md:w-full md:h-[126px] lg:h-[235px] border border-gray border-opacity-50 rounded-xl">
        <div className="flex flex-col p-[15px] lg:p-6">
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row items-center">
              <img
                src={ProfileReview}
                alt="profile_review"
                className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[70px] lg:h-[70px]"
              />
              <div className="w-[14px]" />
              <span className="text-[12px] md:text-[20px] font-medium font-inter text-black">
                Jasmine
              </span>
            </div>
            <div className="flex flex-row">
              {[1, 2, 3, 4, 5].map((index) => (
                <img
                  key={index}
                  src={index === 1 ? Star : StarFill}
                  alt={index === 1 ? "star" : "star_fill"}
                  className="pr-1 w-[12px] h-[12px] md:w-[23px] md:h-[22px] lg:w-6 lg:h-6"
                />
              ))}
            </div>
          </div>
          <div className="md:h-4" />
          <div className="text-start font-normal font-inter text-black text-[8px] md:text-[12px] lg:text-[20px] lg:leading-snug overflow-y-auto">
            Produk dikemas dengan baik tanpa ada kerusakan. Kualitas pangannya
            sangat bagus tanpa ada bau pestisida dan hama serangga. Harga produk
            sangat sesuai dengan jarak pengiriman produk.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
