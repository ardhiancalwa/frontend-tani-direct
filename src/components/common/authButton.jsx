import React from "react";

const AuthButtonGroup = () => {
  return (
    <div
      className="flex items-center justify-around bg-greenLight rounded-full p-3"
      style={{ width: 329, height: 59 }}
    >
      <div className="flex flex-row w-full">
        <AuthButton variant="primary">Login</AuthButton>
        <AuthButton variant="secondary">Register</AuthButton>
      </div>
    </div>
  );
};

const AuthButton = ({ variant, children }) => {
  const className =
    variant === "primary"
      ? "bg-primary rounded-full flex items-center justify-center text-neutral font-inter font-bold"
      : "flex items-center justify-center text-primary font-inter font-bold";

  return (
    <div className={className} style={{ width: 146, height: 40 }}>
      {children}
    </div>
  );
};

export default AuthButtonGroup;
