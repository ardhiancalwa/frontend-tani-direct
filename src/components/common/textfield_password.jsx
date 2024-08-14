import React, { useState } from "react";

import EyeIcon from "../../assets/images/eye-obsecure.svg";
import CloseEyeIcon from "../../assets/images/close-eye-obsecure.svg";

const TextfieldPassword = ({value, onChange, width, height, placeholder, rounded}) => {
  const [isObsecure, setIsObsecure] = useState(true);
  return (
    <div className={`flex flex-row${width} ${height}  rounded-lg border focus-within:ring-2 focus-within:ring-green-700 border-gray border-opacity-30`}>
      <input
        type={isObsecure ? "password" : "text"}
        id="password"
        className={`w-[285px] md:w-full focus:outline-none shadow-sm ${rounded}  font-inter font-semibold lg:text-h5 pl-5`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        className="flex items-center justify-center px-5"
        onClick={() => setIsObsecure(!isObsecure)}
      >
        {isObsecure ? (
          <img src={EyeIcon} className="" alt="Tampilkan password" />
        ) : (
          <img src={CloseEyeIcon} alt="Sembunyikan password" />
        )}
      </button>
    </div>
  );
};

export default TextfieldPassword;
