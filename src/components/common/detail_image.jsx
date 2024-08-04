import React, { useState } from "react";

import CarrotImage from "../../assets/images/carrot2.png";
import SlideLeft from "../../assets/images/slide_left.svg";
import SlideRight from "../../assets/images/slide_right.svg";

const DetailImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setScrollPosition(scrollPosition - 170);
    }
  };

  const handleRightClick = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
      setScrollPosition(scrollPosition + 170);
    }
  };

  return (
    <div>
      <div className="h-[10px] lg:h-[25px] "></div>
      <div className="relative flex flex-row row-auto w-[350px] h-[70px] lg:w-[701px] lg:h-[171px] ">
        <div className=" absolute flex justify-between w-[350px] lg:w-[701px]">
          <div className="p-1">
            <button
              className="hidden lg:flex items-center rounded-l-lg bg-gray bg-opacity-20 px-1 lg:px-2 h-[70px] lg:h-[171px] "
              onClick={handleLeftClick}
            >
              <img src={SlideLeft} alt="slide_left" />
            </button>
          </div>
          <div className="p-1">
            <button
              className="flex items-center rounded-r-lg bg-gray bg-opacity-20 px-1 lg:px-2 h-[70px] lg:h-[171px] "
              onClick={handleRightClick}
            >
              <img src={SlideRight} alt="slide_right" />
            </button>
          </div>
        </div>
        <div className="p-1">
          <img
            src={CarrotImage}
            className="border border-gray border-opacity-50 rounded-lg w-[80px] h-[70px] lg:w-[170px] lg:h-[170px]"
            alt="carrot"
          />
        </div>
        <div className="p-1">
          <img
            src={CarrotImage}
            className="border border-gray border-opacity-50 rounded-lg w-[80px] h-[70px] lg:w-[170px] lg:h-[170px] "
            alt="carrot"
          />
        </div>
        <div className="p-1">
          <img
            src={CarrotImage}
            className="border border-gray border-opacity-50 rounded-lg w-[80px] h-[70px] lg:w-[170px] lg:h-[170px]"
            alt="carrot"
          />
        </div>
        <div className="p-1">
          <img
            src={CarrotImage}
            className="border border-gray border-opacity-50 rounded-xl w-[80px] h-[70px] lg:w-[170px] lg:h-[170px]"
            alt="carrot"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailImage;
