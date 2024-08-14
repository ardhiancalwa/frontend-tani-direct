import React from "react";
import HeaderUserPayment from "../sections/user_payment/header";
import Navbar from "../components/specific/navbar";
import ContentUserPayment from "../sections/user_payment/content";

const UserPayment = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[30px] md:px-[50px] lg:px-[60px] xl:px-[60px] 2xl:px-[110px]">
      <Navbar />
      <HeaderUserPayment />
      <ContentUserPayment />
    </div>
  );
};

export default UserPayment;
