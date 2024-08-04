import React from "react";

import Padi from "../../assets/images/padi.png";
import Farmer from "../../assets/images/farmer.png";
import ProfileDummy from "../../assets/images/profile_dummy.png";

const ContentAboutUs = () => {
  return (
    <div>
      <div className="h-[20px] lg:h-[50px]"></div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <img
            src={Padi}
            className="w-[109px] h-[109px] md:w-[199px] md:h-[199px] lg:w-[356px] lg:h-[340px] "
            alt="imagePadi"
          />
          <div className="flex flex-col items-start w-[204px] md:w-[312px] lg:w-[610px]">
            <div className="font-bold font-inter text-black text-[18px] md:text-[28px] lg:text-[50px] ">
              About Us
            </div>
            <div className="h-[5px] lg:h-[24px]"></div>
            <div className="font-inter text-black font-medium text-start text-[11px] md:text-[16px] lg:text-[25px] lg:leading-normal">
              TaniDirect is a website as for distribute the agricultural product
              from the farm into the traders especially for lower middle-class
              SMEs without any price gaps for each economy agents. We realize
              that the start of country developments is created form economic
              balance. As the our slogan says support farmers for easier life's
              traders.
            </div>
          </div>
        </div>
        <div className="h-[53px] lg:h-[138] "></div>
        <div className="flex flex-row row-auto justify-between items-center">
          <div className="flex flex-col items-start w-[349px] md:w-[383px] lg:w-[1190px]">
            <div className="font-inter font-bold text-black  text-[16px] md:text-[28px] lg:text-[50px]">
              How can we help farmers
            </div>
            <div className="h-[5px] lg:h-[24px]"></div>
            <div className="font-inter font-medium text-black text-start text-[11px] md:text-[14px] lg:text-[25px] lg:leading-normal w-[204px] md:w-[383px] lg:w-[616px] ">
              Our main goals is to make the farmer feels the enjoyment when
              using our website. This conclude that we need to adapt the
              agricultural trend into our website. We always check all the
              possibilities especially the features that help the farmers.
            </div>
            <div className="h-[10px] lg:h-[58px]"></div>
            <div>
              <div className="flex flex-row row-auto items-center">
                <img
                  src={ProfileDummy}
                  className="w-[35px] h-[35px] lg:w-18 lg:h-18"
                  l
                  alt="profile"
                />
                <div className="w-[10px] lg:w-[21px]"></div>
                <div className="flex flex-col items-start">
                  <div className="font-inter font-bold text-black text-[12px] md:text-[16px] lg:text-[25px]">
                    Loren ipsum ceunah
                  </div>
                  <div className="font-inter font-medium text-black text-start text-[10px] md:text-[14px] lg:text-[20px] w-[159px] md:w-[338px] lg:w-[520px]">
                    Lorem ipsum dolor sit amet consectetur. Sit nunc faucibus
                    sed habitant. Mi convallis aliquam ipsum nibh sed massa
                    ultrices.
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: 27 }}></div>
            <div>
              <div className="flex flex-row row-auto items-center">
                <img
                  src={ProfileDummy}
                  className="w-[35px] h-[35px] lg:w-18 lg:h-18"
                  l
                  alt="profile"
                />
                <div className="w-[10px] lg:w-[21px]"></div>
                <div className="flex flex-col items-start">
                  <div className="font-inter font-bold text-black text-[12px] lg:text-[25px]">
                    Loren ipsum ceunah
                  </div>
                  <div className="font-inter font-medium text-black text-start text-[10px] md:text-[14px] lg:text-[20px] w-[159px] md:w-[338px] lg:w-[520px]">
                    Lorem ipsum dolor sit amet consectetur. Sit nunc faucibus
                    sed habitant. Mi convallis aliquam ipsum nibh sed massa
                    ultrices.
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: 27 }}></div>
            <div>
              <div className="flex flex-row row-auto items-center">
                <img
                  src={ProfileDummy}
                  className="w-[35px] h-[35px] lg:w-18 lg:h-18"
                  l
                  alt="profile"
                />
                <div className="w-[10px] lg:w-[21px]"></div>
                <div className="flex flex-col items-start">
                  <div className="font-inter font-bold text-black text-[12px] lg:text-[25px]">
                    Loren ipsum ceunah
                  </div>
                  <div className="font-inter font-medium text-black text-start text-[10px] md:text-[14px] lg:text-[20px] w-[159px] md:w-[338px] lg:w-[520px] ">
                    Lorem ipsum dolor sit amet consectetur. Sit nunc faucibus
                    sed habitant. Mi convallis aliquam ipsum nibh sed massa
                    ultrices.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Farmer}
            className="w-[145px] h-[150px] md:w-[214px] md:h-[204px] lg:w-[470px] lg:h-[520px]"
            alt="petani"
          />
        </div>
      </div>
      <div className="md:h-[75px] h-[100px]"></div>
    </div>
  );
};

export default ContentAboutUs;
