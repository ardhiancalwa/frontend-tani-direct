import React from "react";

const BlogArticle = ({ title, text, time }) => {
  return (
    <button
      className="lg:pl-14 md:py-[14px] py-2 lg:py-4"
      onClick={() => (window.location.href = "/detailblog")}
    >
      <div className="flex flex-col items-start border-b-2 border-gray border-opacity-50 py-1">
        <div className="font-inter font-semibold text-black py-1 text-[14px] md:text-[16px] lg:text-[22px] text-start">
          {title}
        </div>
        <div className="font-inter font-medium text-black text-start py-1 text-[10px] md:text-[12px] lg:text-[15px] ">
          {text}
        </div>
        <div className="font-inter font-medium text-gray text-start py-1 text-[8px] md:text-[10px] lg:text-[12px] ">
          {time}
        </div>
      </div>
    </button>
  );
};

export default BlogArticle;
