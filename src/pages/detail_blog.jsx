import React from "react";
import HeaderDetailBlog from "../sections/detail_blog/header";
import NavbarPembeli from "../components/specific/navbar";
import ContentBlog from "../sections/detail_blog/content";
import Footer from "../components/specific/footer";

const DetailBlog = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPembeli />
      <HeaderDetailBlog />
      <ContentBlog />
      <Footer />
    </div>
  );
};

export default DetailBlog;
