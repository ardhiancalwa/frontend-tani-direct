import React from "react";
import CardReview from "../../components/common/card_review";

const ReviewRatings = () => {
  return (
    <div>
      <div className="flex flex-col col-auto items-start py-4 lg:py-0">
        <div className="text-black font-inter text-[16px] md:text-[20px] lg:text-[30px] font-semibold">
          Review & Ratings
        </div>
        <CardReview />
        <CardReview />
        <CardReview />
      </div>
    </div>
  );
};

export default ReviewRatings;
