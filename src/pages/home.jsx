import React from "react";
import Navbar from "../components/specific/navbar";
import HeaderHome from "../sections/home/header";
// import SearchBar from "../components/common/searchBar";
import Recomendation from "../sections/home/recomendationItem";
import OurProduct from "../sections/home/ourproduct";
import Footer from "../components/specific/footer";

const PembeliHomePage = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full mx-[5vw] md:px-[3vw] lg:px-[1vw] xl:px-[0.1vw] 2xl:mx-[5vw]">
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
