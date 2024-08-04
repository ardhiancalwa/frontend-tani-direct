import React, { useEffect, useState } from "react";
import NavbarPembeli from "../components/specific/navbar";
import BackWishlist from "../sections/wishlist/back_wishlist";
import CardWishList from "../components/common/card_wishlist";
import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const Wishlist = () => {
  const [bookmarkedProducts, setBookmarkedProducts] = useState([]);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarkedProducts(bookmarks);
  }, []);

  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPembeli />
      <Header title={"Wishlist"} onClick={() => window.history.back()} />
      {bookmarkedProducts.length > 0 ? (
        bookmarkedProducts.map((product) => (
          <CardWishList key={product.produkID} product={product} />
        ))
      ) : (
        <p>No bookmarked products</p>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default Wishlist;
