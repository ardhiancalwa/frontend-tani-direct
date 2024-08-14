// InputField.js
import React from "react";

const Textfield = ({
  type,
  id,
  className,
  style,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      className={className}
      style={style}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      
    />
  );
};

export default Textfield;
