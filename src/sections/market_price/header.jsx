import React, { useState, useEffect } from "react";
import ArrowBack from "../../assets/images/arrow_back3.svg";
import Skeleton from "../../components/common/skeleton"; // Adjust the import path as needed

const HeaderMarketPrice = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some loading time
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed
  }, []);

  return (
    <div>
      <div className="h-[30px] md:h-[80px] lg:h-[70px]"></div>
      <div className="flex flex-row row-auto items-center">
        {loading ? (
          <Skeleton className="w-6 h-6 lg:w-10 lg:h-10 rounded-full" />
        ) : (
          <button
            className="flex items-center justify-center"
            onClick={() => window.history.back()}
          >
            <img
              src={ArrowBack}
              className="w-5 h-5 lg:w-[45px] lg:h-[45px]"
              alt="arrow back"
            />
          </button>
        )}
        <div className="w-2 lg:w-4"></div>
        {loading ? (
          <div>
            <Skeleton className="h-6 w-36 mb-2" />
            <Skeleton className="h-4 w-28" />
          </div>
        ) : (
          <>
            <div className="hidden lg:flex flex-col items-start">
              <div
                className="font-inter font-semibold text-black"
                style={{ fontSize: 25 }}
              >
                Blog Harga Pasar
              </div>
              <div
                className="font-inter font-medium text-black"
                style={{ fontSize: 15 }}
              >
                Update-an harga pasar dari hasil pangan petani
              </div>
            </div>
            <div className="lg:hidden font-inter font-semibold text-black text-[16px] md:text-[20px] lg:text-[25px]">
              Blog Harga Pasar
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderMarketPrice;
