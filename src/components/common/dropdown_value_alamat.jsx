import React, { useEffect, useState } from "react";

import DropdownIcon from "../../assets/images/dropdown.svg";
import DropdownUpIcon from "../../assets/images/dropdown_up2.svg";

const DropdownValueAlamat = ({
  title,
  textColor,
  options = [],
  placeholder,
  className,
  value,
  onChange,
  paddingLeft,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (value) {
      const selectedOption = options.find((option) => option.value === value);
      setSelectedOption(selectedOption);
    }
  }, [value, options]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  return (
    <div className={`flex flex-col items-start ${paddingLeft} w-full`}>
      <div
        className={`font-inter font-semibold ${textColor} text-[14px] md:text-[20px] lg:text-[26px]`}
      >
        {title}
      </div>
      <div style={{ height: 7 }}></div>
      <div className={className}>
        <div
          className={`h-[35px] lg:w-[192px] xl:w-[20vw] lg:h-[5vw] md:h-[44px] 2xl:w-[400px] flex flex-row justify-between items-center border-[1px] border-gray border-opacity-50 bg-white rounded-md lg:rounded-lg px-[10px] cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="h-18 pr-[5px] lg:mr-0 flex justify-start items-center font-medium font-inter text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] 2xl:text-[1.5rem]">
            {selectedOption ? selectedOption.label : placeholder}
          </div>
          {isOpen ? (
            <img
              src={DropdownUpIcon}
              className="w-[25px] h-[25px] lg:w-[40px] lg:[40px]"
              alt="dropdown up"
            />
          ) : (
            <img
              src={DropdownIcon}
              className="w-[25px] h-[25px] lg:w-[40px] lg:[40px]"
              alt="dropdown"
            />
          )}
        </div>
        {isOpen && (
          <div
            className="absolute w-full md:w-[140px] gap-x-2 lg:w-[292px] xl:w-full 2xl:w-[400px] mt-3 bg-white border border-gray border-opacity-20 rounded-lg lg:rounded-xl shadow-lg z-10 max-h-36 overflow-y-auto "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {options.map((option) => (
              <div
                key={option.value}
                className="p-4 hover:bg-gray-200 cursor-pointer hover:bg-greenLight hover:bg-opacity-50 border-b-2 border-gray border-opacity-10"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownValueAlamat;
