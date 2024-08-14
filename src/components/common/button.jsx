import React from "react";

const ButtonWithImage = ({ imgSrc, text, onClick }) => {
  return (
    <button
      className="flex items-center justify-center bg-white border border-gray border-opacity-50 rounded-md w-[346px] md:w-[563px] lg:w-[500px] 2xl:w-[563px] h-[54px]"
      onClick={onClick}
    >
      <img src={imgSrc} alt={text} />
      <div className="pl-2 text-black font-semibold font-inter lg:text-lg">
        {text}
      </div>
    </button>
  );
};

export default ButtonWithImage;
