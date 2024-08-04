import React, { useEffect, useState } from "react";
import CardProduct from "../../components/common/card_produk";
import axios from "axios";
import Cookies from "universal-cookie";
import request from "../../utils/config";

const cookies = new Cookies();

const OurProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchData = (token) => {
    request
      .get("/produk")
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    const tokenPembeli = cookies.get("token_pembeli");
    const tokenPetani = cookies.get("token_petani");

    if (tokenPembeli) {
      fetchData(tokenPembeli);
    } else if (tokenPetani) {
      fetchData(tokenPetani);
    } else {
      console.log("No token found");
    }
  }, []);

  return (
    <div>
      <div className="h-[40px] lg:h-[120px] "></div>
      <div className="flex flex-col items-center justify-center">
        <div className="font-inter text-[20px] md:text-[25px] lg:text-[60px] font-bold text-black">
          Our Products
        </div>
        <div className="h-[20px] lg:h-[60px] "></div>
        <div className="grid grid-cols-3 gap-x-[11px] gap-y-[13px] md:gap-x-5 md:gap-y-[34px] lg:gap-x-12 lg:gap-y-16">
          {products.slice(0, 9).map((product) => (
            <CardProduct key={product.produkID} product={product} />
          ))}
        </div>
        {/* <div style={{ height: 40 }}></div> */}
        <div className="py-[20px] md:py-[30px]">
          <button
            className="border border-primary rounded-md lg:rounded-xl p-[10px] md:p-[15px] lg:p-5 hover:bg-primary hover:text-white text-primary font-bold text-[10px] md:text-[18px] lg:text-[22px] font-inter focus:ring-2 focus:outline-none focus:ring-primary focus:ring-opacity-30"
            onClick={() => (window.location.href = "/allproducts")}
          >
            See Our Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
