import React from "react";
import Navbar from "../components/specific/navbar";
import HeaderHome from "../sections/home/header";
// import SearchBar from "../components/common/searchBar";
import Recomendation from "../sections/home/recomendationItem";
import OurProduct from "../sections/home/ourproduct";
import Footer from "../components/specific/footer";

const PembeliHomePage = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[40px] md:px-[50px] lg:px-[60px] xl:px-[60px] 2xl:px-[100px]">
      <Navbar />
      <HeaderHome />
      <div className="my-[36px] lg:my-8"></div>
      {/* <SearchBar /> */}
      <Recomendation />
      <OurProduct />
      <Footer />
    </div>
  );
};

export default PembeliHomePage;
