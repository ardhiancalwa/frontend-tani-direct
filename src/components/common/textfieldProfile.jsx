import React from "react";

const TextfieldProfile = ({
  title,
  placeholder,
  type,
  readOnly,
  className,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="pb-5">
      <div className="flex flex-col items-start">
        <div className="font-inter font-semibold text-black text-base md:text-[20px] mb-1 lg:text-2xl">
          {title}
        </div>
        <div style={{ height: 7 }}></div>
        <form className="flex items-center justify-start max-w-screen-sm lg:max-w-full">
          <span className={`flex items-center justify-start rounded-md ring-1 ring-gray p-5 ring-opacity-50 focus:ring-gray lg:max-w-full h-[26px] md:h-[40px] lg:h-[70px]`}>
            <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className={className}
              name={name}
              readOnly={readOnly}
            />
          </span>
        </form>
      </div>
    </div>
  );
};

export default TextfieldProfile;
