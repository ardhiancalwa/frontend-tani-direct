import React from "react";

const ButtonWithImage = ({ imgSrc, text, onClick }) => {
  return (
    <button
      className="flex items-center justify-center bg-white border border-gray border-opacity-50 rounded-md 2xl:rounded-2xl w-[80vw] md:w-[75vw] lg:w-[45vw] h-[10vw] md:h-[8vw] lg:h-[6vw] xl:h-[6vw] 2xl:w-[40vw] 2xl:h-[4vw] my-3 md:my-5 2xl:my-3"
      onClick={onClick}
    >
      <img src={imgSrc} className="2xl:w-[2vw]" alt={text} />
      <div className="pl-2 2xl:pl-6 text-black font-semibold font-inter lg:text-xl 2xl:text-2xl">
        {text}
      </div>
    </button>
  );
};

export default ButtonWithImage;
