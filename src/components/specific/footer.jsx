import React from "react";

import qrisIcon from "../../assets/images/qris.svg";
import bankIcon from "../../assets/images/bank.svg";
import instagramIcon from "../../assets/images/instagram_footer.svg";
import facebookIcon from "../../assets/images/facebook_footer.svg";
import twitterIcon from "../../assets/images/twitter_footer.svg";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="h-[25px] md:h-[75px] lg:h-[120px]"></div>
      <footer className="w-[350px] md:w-full lg:w-full mx-auto  lg:px-4">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col text-start w-[80px] md:w-[150px] lg:w-[500px]">
            <div
              className="font-inter text-black font-bold text-[8px] md:text-[15px] lg:text-2xl mb-2"
              style={{ lineHeight: 1 }}
            >
              <img
                src={Logo}
                className="lg:w-[120px] lg:h-[67px]"
                alt="logo tani direct"
              />
            </div>
            <div className="lg:h-[20px]"></div>
            <div className="font-normal font-inter text-gray opacity-50 text-[5px] md:text-[10px] lg:text-[16px]">
              The website specializes in reducing farmers’ dependency on
              middlemen.
            </div>
          </div>
          <div className="flex flex-row w-full items-start justify-between lg:justify-around">
            <div className="w-full flex flex-col items-start ml-[20px] md:ml-[27px] lg:ml-[87px]">
              <div
                className="font-inter text-black font-bold text-[8px] md:text-[12px] lg:text-lg mb-2"
                style={{ lineHeight: 1 }}
              >
                Product
              </div>
              <a href="#">
                <div className="text-gray opacity-50 font-inter py-[0px] lg:py-[7px] text-[6px] md:text-[10px] lg:text-[16px]">
                  Must-Have Items
                </div>
              </a>
              <a href="#">
                <div className="text-gray opacity-50 font-inter py-[0px] lg:py-[7px] text-[6px] md:text-[10px] lg:text-[16px]">
                  Produk Utama
                </div>
              </a>
              <a href="#">
                <div className="text-gray opacity-50 font-inter py-[0px] lg:py-[7px] text-[6px] md:text-[10px] lg:text-[16px]">
                  Wishlist
                </div>
              </a>
            </div>
            <div className="w-full flex flex-col items-start">
              <div
                className="font-inter text-black font-bold text-[8px] md:text-[12px] lg:text-lg mb-2"
                style={{ lineHeight: 1 }}
              >
                Information
              </div>
              <a href="#">
                <div className="text-gray opacity-50 font-inter py-[0px] lg:py-[7px] text-[6px] md:text-[10px] lg:text-[16px]">
                  Term of use
                </div>
              </a>
              <a href="#">
                <div className="text-gray opacity-50 font-inter py-[0px] lg:py-[7px] text-[6px] md:text-[10px] lg:text-[16px]">
                  Blog
                </div>
              </a>
              <a href="#">
                <div className="text-gray opacity-50 font-inter py-[0px] lg:py-[7px] text-[6px] md:text-[10px] lg:text-[16px]">
                  Cookies Policy
                </div>
              </a>
            </div>
            <div className="w-full flex flex-col items-start">
              <div
                className="font-inter text-black font-bold text-[8px] md:text-[12px] lg:text-lg mb-2"
                style={{ lineHeight: 1 }}
              >
                Company
              </div>
              <a href="/aboutus">
                <div className="text-gray opacity-50 font-inter py-[0px] lg:py-[7px] text-[6px] md:text-[10px] lg:text-[16px]">
                  About us
                </div>
              </a>
              <a href="#">
                <div className="text-gray opacity-50 font-inter py-[0px] lg:py-[7px] text-[6px] md:text-[10px] lg:text-[16px]">
                  Contact us
                </div>
              </a>
              <a href="/product">
                <div className="text-gray opacity-50 font-inter py-[0px] lg:py-[7px] text-[6px] md:text-[10px] lg:text-[16px]">
                  TaniDirect
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start w-[110px] md:w-[170px] lg:w-[250px]">
            <div
              className="text-black1 font-inter font-bold text-[8px] md:text-[12px] lg:text-[16px] mb-2"
              style={{ lineHeight: 1 }}
            >
              Payment Methods
            </div>
            <div className="flex flex-row row-auto justify-between py-[5px] lg:py-[8px]">
              <img
                src={qrisIcon}
                className="w-[29px] h-[12px] md:w-[41px] md:h-[13px] lg:w-[50px] lg:h-[18px] "
                alt="QRIS"
              />
              <div style={{ width: 39 }}></div>
              <img
                src={bankIcon}
                className="w-[13px] h-[13px] md:2-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px]"
                alt="QRIS"
              />
            </div>
          </div>
        </div>
      </footer>
      <div className="pt-[7px] pb-[7px] md:py-[15px] lg:py-8">
        <hr className="border-gray opacity-50" style={{ borderWidth: 1 }} />
      </div>
      <div className="flex flex-row row-auto justify-end">
        <div className="px-[7px] md:px-[15px] lg:px-[15px]">
          <button className="flex items-center justify-center border border-gray opacity-50 rounded-full w-[16px] h-[16px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[35px] ">
            <img
              src={instagramIcon}
              className="w-[5px] h-[5px] md:w-[8px] md:h-[8px] lg:w-[11px] lg:h-[11px]"
              alt="instagram"
            />
          </button>
        </div>
        <div className="px-[7px] lg:px-[15px]">
          <button className="flex items-center justify-center border border-gray opacity-50 rounded-full w-[16px] h-[16px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[35px]">
            <img
              src={facebookIcon}
              className="w-[5px] h-[5px] md:w-[8px] md:h-[8px] lg:w-[11px] lg:h-[11px]"
              alt="facebook"
            />
          </button>
        </div>
        <div className="px-[7px] lg:px-[15px]">
          <button className="flex items-center justify-center border border-gray opacity-50 rounded-full w-[16px] h-[16px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[35px]">
            <img
              src={twitterIcon}
              className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] lg:w-[11px] lg:h-[11px]"
              alt="twitter"
            />
          </button>
        </div>
      </div>
      <div style={{ height: 30 }}></div>
    </div>
  );
};

export default Footer;
