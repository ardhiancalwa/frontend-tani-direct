import React from "react";
import NavbarPetani from "../../components/specific/navbar_seller";
import ContentHistoryTransaction from "../../sections/history_transaction/content";
import Header from "../../components/common/header";

const HistoryTransaction = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPetani />
      <Header
        title={"History Transaction"}
        onClick={() => window.history.back()}
      />
      <ContentHistoryTransaction />
    </div>
  );
};

export default HistoryTransaction;
