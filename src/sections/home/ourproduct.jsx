import React, { useEffect, useState } from "react";
import CardProduct from "../../components/common/card_produk";
import Cookies from "universal-cookie";
import request from "../../utils/request";
import LoadingScreen from "../../components/common/loading";

const cookies = new Cookies();

const OurProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await request
      .get("/produk")
      .then((response) => {
        setLoading(false);
        setProducts(response.data.data);
      })
      .catch((error) => {
        setLoading(true);
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
      <div className="h-[0px] lg:h-[30px] 2xl:h-[60px] "></div>
      <div className="flex flex-col items-center justify-center">
        <div className="font-inter text-[1.25] md:text-[1.75rem] lg:text-[2.4rem] xl:text-[2.6rem] 2xl:text-[3.5rem] my-4 md:my-8 lg:my-12 xl:my-16 2xl:my-20 font-bold text-black">
          Our Products
        </div>
        <div className="grid grid-cols-3 2xl:grid-cols-4 gap-x-[11px] gap-y-[13px] md:gap-x-5 lg:gap-x-8 lg:gap-y-10 md:gap-y-[34px] 2xl:gap-x-12 2xl:gap-y-16">
          {loading ? (
            <div className="flex items-center justify-center col-span-4 h-[600px]">
              <LoadingScreen />
            </div>
          ) : (
            products
              .slice(0, 12)
              .map((product) => (
                <CardProduct key={product.produkID} product={product} />
              ))
          )}
        </div>
        {/* <div style={{ height: 40 }}></div> */}
        <div className="py-[20px] md:py-[50px]">
          <button
            className="border border-primary rounded-md hover:shadow-2xl shadow-primary lg:rounded-lg active:bg-green-900 p-[10px] md:p-[15px] lg:p-5 hover:bg-primary hover:text-white text-primary font-bold text-[10px] md:text-[18px] lg:text-[22px] font-inter focus:outline-none"
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
