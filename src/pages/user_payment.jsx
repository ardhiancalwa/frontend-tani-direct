import React from "react";
import Navbar from "../components/specific/navbar";
import ContentUserPayment from "../sections/user_payment/content";
import Header from "../components/common/header";

const UserPayment = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[5vw] md:px-[8vw] lg:px-[6vw] xl:px-[5vw] 2xl:px-[5vw]">
      <Navbar />
      <Header title={"Checkout"} onClick={() => window.history.back()}/>
      <ContentUserPayment />
    </div>
  );
};

export default UserPayment;
