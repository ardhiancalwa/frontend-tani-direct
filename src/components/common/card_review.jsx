import React from "react";

import ProfileReview from "../../assets/images/profile_review.png";
import StarFill from "../../assets/images/star_review_fill.svg";
import Star from "../../assets/images/star_review.svg";

const CardReview = () => {
  return (
    <div className="py-[1.5vw] 2xl:py-3">
      <div className="w-full h-auto border border-gray border-opacity-50 rounded-lg 2xl:rounded-xl">
        <div className="flex flex-col p-2 md:p-3 lg:p-4 2xl:p-5">
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row items-center">
              <img
                src={ProfileReview}
                alt="profile_review"
                className="w-[8vw] h-[8vw] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] 2xl:w-[70px] 2xl:h-[70px]"
              />
              <span className="text-[0.8rem] md:text-[1rem] font-medium font-inter text-black ml-2">
                Jasmine
              </span>
            </div>
            <div className="flex flex-row items-center">
              {[1, 2, 3, 4, 5].map((index) => (
                <img
                  key={index}
                  src={index === 1 ? Star : StarFill}
                  alt={index === 1 ? "star" : "star_fill"}
                  className="pr-1 w-[3vw] h-[3vw] md:w-[20px] md:h-[20px] 2xl:w-6 2xl:h-6"
                />
              ))}
            </div>
          </div>
          <div className="mt-2 text-start font-normal font-inter text-black text-[8px] md:text-[12px] lg:text-[14px] 2xl:text-[20px] lg:leading-snug overflow-y-auto ">
            Produk dikemas dengan baik tanpa ada kerusakan. Kualitas pangannya sangat bagus tanpa ada bau pestisida dan hama serangga. Harga produk sangat sesuai dengan jarak pengiriman produk.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
