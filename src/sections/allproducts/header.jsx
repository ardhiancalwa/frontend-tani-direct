import React, { useState } from "react";

import ArrowBack from "../../assets/images/arrow_back3.svg";
import SearchBar from "../../components/common/searchBar";

const HeaderAllProducts = () => {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <div className="h-[20px] md:h-[50px] lg:h-[50px] "></div>{" "}
      <div className="flex flex-row row-auto items-center justify-between w-[320px] md:w-[486px] lg:w-[928px]">
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
        <SearchBar setProducts={setProducts} />
      </div>
    </div>
  );
};

export default HeaderAllProducts;
