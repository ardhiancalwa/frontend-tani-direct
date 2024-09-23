import React, { useEffect, useState } from "react";
import Navbar from "../components/specific/navbar";
import CardWishList from "../components/common/card_wishlist";
import toast from "react-hot-toast";

const Wishlist = () => {
  const [bookmarkedProducts, setBookmarkedProducts] = useState([]);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarkedProducts(bookmarks);
  }, []);

  const handleRemoveBookmark = (productId) => {
    const updatedBookmarks = bookmarkedProducts.filter(
      (item) => item.produkID !== productId
    );
    setBookmarkedProducts(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    toast("Deleted Bookmarked", {
      icon: "⭕",
    });
  };

  return (
    <div className="max-w-screen-sm md:max-w-full px-[5vw] md:px-[8vw] lg:px-[6vw] xl:px-[5vw] 2xl:px-[5vw]">
      <Navbar />
      <div className="mt-[3vw] w-full md:mt-[8.5vw] lg:mt-[4vw] xl:mt-[2.5vw] 2xl:mt-[2vw] fixed bg-white z-50">
        <div className="flex flex-row row-auto items-center py-3">
          <div className="font-inter font-semibold text-black text-[1rem] md:text-[1.4rem] lg:text-[2rem]">
            Whislist
          </div>
        </div>
      </div>
      {bookmarkedProducts.length > 0 ? (
        bookmarkedProducts.map((product) => (
          <CardWishList
            key={product.produkID}
            product={product}
            onRemoveBookmark={handleRemoveBookmark}
          />
        ))
      ) : (
        <p>No bookmarked products</p>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default Wishlist;
