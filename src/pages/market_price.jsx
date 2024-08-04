import React from "react";
import HeaderMarketPrice from "../sections/market_price/header";
import NavbarPembeli from "../components/specific/navbar";
import ContentArticle from "../sections/market_price/content_article";

const MarketPrice = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPembeli />
      <HeaderMarketPrice />
      <ContentArticle />
      <div style={{ height: 135 }}></div>
    </div>
  );
};

export default MarketPrice;
