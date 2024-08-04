import React from "react";
import HeaderMarketPrice from "../../sections/market_price/header";
import ContentArticle from "../../sections/market_price/content_article";
import NavbarPetani from "../../components/specific/navbar_seller";
import Header from "../../components/common/header";

const MarketPrice = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPetani />
      <Header title={"Profile Seller"} onClick={() => window.history.back()} />
      <ContentArticle />
      <div style={{ height: 135 }}></div>
    </div>
  );
};

export default MarketPrice;
