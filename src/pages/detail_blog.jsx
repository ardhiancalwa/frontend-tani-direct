import React from "react";
import HeaderDetailBlog from "../sections/detail_blog/header";
import Navbar from "../components/specific/navbar";
import ContentBlog from "../sections/detail_blog/content";
import Footer from "../components/specific/footer";

const DetailBlog = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[40px] md:px-[50px] lg:px-[60px] xl:px-[60px] 2xl:px-[100px]">
      <Navbar />
      <HeaderDetailBlog />
      <ContentBlog />
      <Footer />
    </div>
  );
};

export default DetailBlog;
