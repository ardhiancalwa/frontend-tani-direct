import React, { useEffect, useState } from "react";
import Navbar from "../components/specific/navbar";
import BackWishlist from "../sections/wishlist/back_wishlist";
import CardWishList from "../components/common/card_wishlist";
import Footer from "../components/specific/footer";
import Header from "../components/common/header";
import toast from "react-hot-toast";

const Wishlist = () => {
  const [bookmarkedProducts, setBookmarkedProducts] = useState([]);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarkedProducts(bookmarks);
  }, []);

  const handleRemoveBookmark = (productId) => {
    const updatedBookmarks = bookmarkedProducts.filter((item) => item.produkID !== productId);
    setBookmarkedProducts(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    toast('Deleted Bookmarked', {
      icon: '⭕',
    });
  };

  return (
    <div className="max-w-screen-sm md:max-w-full px-[5vw] md:px-[8vw] lg:px-[6vw] xl:px-[5vw] 2xl:px-[5vw]">
      <Navbar />
      <Header title={"Wishlist"} onClick={() => window.history.back()} />
      {bookmarkedProducts.length > 0 ? (
        bookmarkedProducts.map((product) => (
          <CardWishList key={product.produkID} product={product} onRemoveBookmark={handleRemoveBookmark} />
        ))
      ) : (
        <p>No bookmarked products</p>
      )}
      {/* <Footer /> */} 
    </div>
  );
};

export default Wishlist;
