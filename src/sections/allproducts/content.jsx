import React, { useEffect, useState } from "react";
import CardProductAll from "../../components/common/card_produk_all";
import Cookies from "universal-cookie";
import SearchBar from "../../components/common/searchBar";
import ArrowBack from "../../assets/images/arrow_back3.svg";
import request from "../../utils/request";
import toast from "react-hot-toast";
import LoadingScreen from "../../components/common/loading";

const cookies = new Cookies();

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateProductsPerPage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1536) {
        setProductsPerPage(10);
      } else if (screenWidth >= 1024) {
        setProductsPerPage(8);
      } else {
        setProductsPerPage(20);
      }
    };

    updateProductsPerPage();
    window.addEventListener("resize", updateProductsPerPage);

    return () => {
      window.removeEventListener("resize", updateProductsPerPage);
    };
  }, []);

  const handleBookmarkClick = (product) => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const isBookmarked = bookmarks.some(
      (item) => item.produkID === product.produkID
    );

    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter(
        (item) => item.produkID !== product.produkID
      );
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    } else {
      bookmarks.push(product);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      toast("Add to Wishlist", {
        icon: "✅",
      });
    }

    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.produkID === product.produkID
          ? { ...p, isBookmarked: !isBookmarked }
          : p
      )
    );
  };

  useEffect(() => {
    const tokenPembeli = cookies.get("token_pembeli");
    const tokenPetani = cookies.get("token_petani");

    const fetchData = () => {
      setLoading(true);
      request
        .get("/produk")
        .then((res) => {
          const productsWithBookmark = res.data.data.map((product) => {
            const bookmarks =
              JSON.parse(localStorage.getItem("bookmarks")) || [];
            const isBookmarked = bookmarks.some(
              (item) => item.produkID === product.produkID
            );
            return { ...product, isBookmarked };
          });
          setProducts(productsWithBookmark);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch data: ", err);
          setLoading(false);
        });
    };

    if (tokenPembeli) {
      fetchData();
    } else if (tokenPetani) {
      fetchData();
    } else {
      alert("Login First!");
      window.location.href = "/login";
    }
  }, []);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div>
      <div className="mt-[6vw] md:mt-[12vw] lg:mt-[7vw] xl:mt-[5vw] 2xl:mt-[3vw] ">
        <div className="flex flex-row row-auto items-center justify-between w-[74vw] md:w-[66vw] lg:w-[74vw] xl:w-[76vw] 2xl:w-[75vw] ">
          <button
            className="flex items-center justify-center hover:scale-95"
            onClick={() => window.history.back()}
          >
            <img
              src={ArrowBack}
              className="w-[6vw] h-[6vw] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]"
              alt="arrow back"
            />
          </button>
          <SearchBar setProducts={setProducts} />
        </div>
      </div>
      <div className="h-[20px] lg:h-[50px] "></div>
      {loading ? (
        <div className="flex items-center justify-center col-span-4 h-[600px]">
          <LoadingScreen />
        </div>
      ) : (
        <div>
          <div className="mx-auto grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-[5vw] md:gap-[1.5vw] lg:gap-[2vw] xl:gap-x-5 2xl:gap-[2vw] lg:pl-[0px] ">
            {currentProducts.map((product) => (
              <CardProductAll
                key={product.produkID}
                product={product}
                onBookmarkClick={handleBookmarkClick}
                isBookmarked={product.isBookmarked}
              />
            ))}
          </div>
          <div className="flex justify-center pt-[80px] mt-4">
            <button
              className="bg-white hover:bg-black hover:text-white text-black font-semibold text-[12px] xl:text-[20px] px-3 py-1 md:py-2 md:px-4 border border-gray border-opacity-50 rounded mx-1"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <button
                key={pageNumber}
                className={`bg-white hover:bg-black hover:text-white text-black font-semibold  text-[12px]  xl:text-[20px] px-3 py-1 md:py-2 md:px-4 border border-gray border-opacity-50 rounded mx-1 ${
                  pageNumber + 1 === currentPage ? "bg-gray-400" : ""
                }`}
                onClick={() => setCurrentPage(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            ))}
            <button
              className="bg-white hover:bg-black hover:text-white text-black font-semibold text-[12px] xl:text-[20px] px-3 py-1 md:py-2 md:px-4 border border-gray border-opacity-50 rounded mx-1"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <div style={{ height: 100 }}></div>
    </div>
  );
};

export default Products;
