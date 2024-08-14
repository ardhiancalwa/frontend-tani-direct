import React from "react";

const UploadProductField = ({
  title,
  type,
  placeholder,
  readOnly,
  value,
  onChange,
}) => {
  return (
    <div className="py-3">
      <div className="flex flex-col items-start">
        <div
          className="font-inter font-semibold text-gray text-[16px] lg:text-[20px] 2xl:text-[24px]"
        >
          {title}
        </div>
        <div style={{ height: 7 }}></div>
        <form className="flex flex-row items-center justify-start">
          <span className="flex items-center justify-start rounded-md ring-1 ring-gray p-5 ring-opacity-50 focus:ring-gray w-[365px] h-[34px] md:w-[668px] lg:w-[904px] 2xl:w-[1895px] md:h-[46px]">
            <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className="font-inter w-full font-medium focus:outline-none text-[16px] md:text-[20px] lg:text-[24px]"
              readOnly={readOnly}
            />
          </span>
        </form>
      </div>
    </div>
  );
};

export default UploadProductField;
