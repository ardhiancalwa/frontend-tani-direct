import React, { useState } from "react";

import EyeIcon from "../../assets/images/eye-obsecure.svg";
import CloseEyeIcon from "../../assets/images/close-eye-obsecure.svg";

const TextfieldPassword = ({
  value,
  onChange,
  width,
  height,
  placeholder,
  rounded,
}) => {
  const [isObsecure, setIsObsecure] = useState(true);
  return (
    <div
      className={`flex flex-row ${width} ${height}  rounded-lg 2xl:rounded-xl border focus-within:ring-2 focus-within:ring-green-700 border-gray border-opacity-30`}
    >
      <input
        type={isObsecure ? "password" : "text"}
        id="password"
        className={`w-full focus:outline-none shadow-sm ${rounded}  font-inter font-semibold text-sm md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl pl-5 2xl:pl-10`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        className="flex items-center justify-center px-5"
        onClick={() => setIsObsecure(!isObsecure)}
      >
        {isObsecure ? (
          <img src={CloseEyeIcon} alt="Sembunyikan password" />
        ) : (
          <img
            src={EyeIcon}
            className="2xl:w-[1.5vw] 2xl:h-[1.5vw]"
            alt="Tampilkan password"
          />
        )}
      </button>
    </div>
  );
};

export default TextfieldPassword;
