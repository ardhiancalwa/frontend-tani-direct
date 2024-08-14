import React from "react";
import HeaderMarketPrice from "../sections/market_price/header";
import Navbar from "../components/specific/navbar";
import ContentArticle from "../sections/market_price/content_article";

const MarketPrice = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[40px] md:px-[50px] lg:px-[60px] xl:px-[60px] 2xl:px-[102px]">
      <Navbar />
      <HeaderMarketPrice />
      <ContentArticle />
      <div style={{ height: 135 }}></div>
    </div>
  );
};

export default MarketPrice;
