import React from "react";

import Padi from "../../assets/images/padi.png";
import Farmer from "../../assets/images/farmer.png";
import PriceIcon from "../../assets/images/best-price.svg";
import MarketPriceIcon from "../../assets/images/marketplace.svg";
import SuccessIcon from "../../assets/images/success.svg";

const ContentAboutUs = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-around xl:px-30">
          <img
            src={Padi}
            className="w-[18vh] md:w-[22vh] lg:w-[30vh] xl:w-[30vh] 2xl:w-[40vh]"
            alt="imagePadi"
          />
          <div className="flex flex-col items-start w-full ml-2 lg:ml-4 xl:ml-30">
            <div className="font-bold font-inter text-black text-[1.2rem] md:text-[1.5rem] lg:text-[2.2rem] xl:text-[3rem]">
              About Us
            </div>
            <div className="mt-2 font-inter text-black font-medium text-start text-[0.65rem] md:text-[0.9rem] lg:text-[1.2rem] xl:text-[1.5rem] lg:leading-normal">
              TaniDirect is a website as for distribute the agricultural product
              from the farm into the traders especially for lower middle-class
              SMEs without any price gaps for each economy agents. We realize
              that the start of country developments is created form economic
              balance. As the our slogan says support farmers for easier life's
              traders.
            </div>
          </div>
        </div>
        <div className="flex flex-row row-auto justify-around items-center mt-5 xl:px-30">
          <div className="flex flex-col items-start w-full mr-2">
            <div className="font-inter font-bold text-black  text-[1rem] md:text-[1.5rem] lg:text-[2.2rem] xl:text-[3rem] text-start">
              How can we help farmers
            </div>
            <div className="mt-2 font-inter font-medium text-black text-start text-[0.65rem] md:text-[0.9rem] lg:text-[1.2rem] xl:text-[1.5rem] lg:leading-normal w-full ">
              Our main goals is to make the farmer feels the enjoyment when
              using our website. This conclude that we need to adapt the
              agricultural trend into our website. We always check all the
              possibilities especially the features that help the farmers.
            </div>
            <div className="mt-5">
              <div className="flex flex-row row-auto items-center justify-between">
                <div className="flex justify-center w-[20vh] lg:w-[15vw] xl:w-[13vh] bg-[#D9D9D9] rounded-full">
                  <img src={PriceIcon} className="p-3 lg:p-5 xl:p-8" alt="profile" />
                </div>
                <div className="flex flex-col items-start ml-2 md:ml-4 lg:ml-12 xl:ml-8">
                  <div className="font-inter font-bold text-black text-[0.7rem] md:text-[1rem] lg:text-[1.5rem]">
                    Price Indicator
                  </div>
                  <div className="font-inter font-medium text-black text-start text-[0.55rem] md:text-[0.85rem] lg:text-[1rem] w-full">
                    Market price always change every season. Don’t worry, we set
                    an ideal market price for each product avoiding price
                    monopoly in real time.
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3 xl:my-5">
              <div className="flex flex-row row-auto items-center">
              <div className="flex justify-center w-[20vh] lg:w-[15vw] xl:w-[12vh] bg-[#D9D9D9] rounded-full">
                  <img src={MarketPriceIcon} className="p-3 lg:p-5 xl:p-8" alt="profile" />
                </div>
                <div className="flex flex-col items-start ml-2 md:ml-4 lg:ml-10 xl:ml-8">
                <div className="font-inter font-bold text-black text-[0.7rem] md:text-[1rem] lg:text-[1.5rem]">
                    Marketplace Corner
                  </div>
                  <div className="font-inter font-medium text-black text-start text-[10px] md:text-[0.85rem] lg:text-[1rem] w-full">
                    Our marketplace corner allow you to do buying and selling
                    activities supported with delivery services from us.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row row-auto items-center">
              <div className="flex justify-center w-[20vh] lg:w-[15vw] xl:w-[12vh] bg-[#D9D9D9] rounded-full">
                  <img src={SuccessIcon} className="p-3 lg:p-5 xl:p-9" alt="profile" />
                </div>
                <div className="flex flex-col items-start ml-2 md:ml-4 lg:ml-10 xl:ml-9">
                <div className="font-inter font-bold text-black text-[0.7rem] md:text-[1rem] lg:text-[1.5rem]">
                    Must Have-Items Bar
                  </div>
                  <div className="font-inter font-medium text-black text-start text-[0.55rem] md:text-[0.85rem] lg:text-[1rem] w-full">
                    TaniDirect provide you with our most recommended items from
                    the best selling items in our platform straight from the
                    farm.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Farmer}
            className="w-[20vh] md:w-[25vh] lg:w-[35vh] 2xl:w-[40vh]"
            alt="petani"
          />
        </div>
      </div>
      <div className="md:h-[75px] h-[100px]"></div>
    </div>
  );
};

export default ContentAboutUs;
