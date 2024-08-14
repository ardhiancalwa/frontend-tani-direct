import React from "react";
import Navbar from "../components/specific/navbar";
import ArrowBack from "../sections/about_us/arrow_back";
import ContentAboutUs from "../sections/about_us/content";
import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const AboutUs = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[40px] md:px-[50px] lg:px-[60px] xl:px-[60px] 2xl:px-[110px]">
      <Navbar />
      <Header onClick={() => window.history.back()}/>
      <ContentAboutUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
