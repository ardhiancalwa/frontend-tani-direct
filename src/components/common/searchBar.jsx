import { useEffect, useState } from "react";

import SearchIcon from "../../assets/images/search.svg";
import axios from "axios";
import Cookies from "universal-cookie";
import request from "../../utils/request";

const cookies = new Cookies();

const SearchBar = ({ setProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tokenPetani = cookies.get("token_petani");
    const tokenPembeli = cookies.get("token_pembeli");

    const fetchProducts = async (token) => {
      setLoading(true);
      try {
        const url = searchTerm ? "https://backend-tanidirect-production.up.railway.app/produk/search" : "https://backend-tanidirect-production.up.railway.app/produk";
        const params = searchTerm ? { nama_produk: searchTerm } : {};

        const response = await axios.get(url, {
          params,
        });

        console.log(response.data.data);
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };

    if (tokenPembeli) {
      fetchProducts(tokenPembeli);
      setLoading(false);
    } else if (tokenPetani) {
      fetchProducts(tokenPetani);
      setLoading(false);
    } else {
      console.log("No token found");
      setLoading(false);
    }
  }, [searchTerm, setProducts]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[55vw] h-[8vw] md:w-[45vw] md:h-[5.6vw] lg:w-[60vw] lg:h-[58px] flex items-center"
      >
        <span className="flex items-center justify-center w-full h-full rounded-md lg:rounded-xl ring-[1px] ring-gray ring-opacity-40 pl-5 pr-5 transition-all duration-300 ease-in-out focus-within:ring-opacity-100 hover:ring-opacity-100 hover:ring-gray-700">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
            className="flex-1 px-4 py-2 font-medium text-black text-[12px] md:text-[16px] lg:text-[20px] font-inter rounded-md focus:outline-none placeholder-black"
          />
          <img
            src={SearchIcon}
            className="w-[4vw] md:w-[24px] md:h-[24px] mr-4 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
            alt="search icon"
          />
        </span>
      </form>
    </div>
  );
};

export default SearchBar;
