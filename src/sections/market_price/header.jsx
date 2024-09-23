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
    <div className="mt-[3vw] md:mt-[8.5vw] lg:mt-[3.5vw] xl:mt-[2.5vw] 2xl:mt-[2vw] py-2 fixed bg-white w-full">
      <div className="flex flex-row row-auto items-center">
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
                style={{ fontSize: 27 }}
              >
                Blog Harga Pasar
              </div>
              <div
                className="font-inter font-medium text-black"
                style={{ fontSize: 13 }}
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
