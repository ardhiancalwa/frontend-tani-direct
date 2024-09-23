import React from "react";
import Navbar from "../components/specific/navbar";
import HeaderTrackingOrder from "../sections/tracking_order/header";
import ContentTrackingOrder from "../sections/tracking_order/content";
import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const TrackingOrder = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full px-[5vw] md:px-[8vw] lg:px-[6vw] xl:px-[5vw] 2xl:px-[5vw]">
      <Navbar />
      <Header title={"Tracking Order"} onClick={() => window.history.back()} />
      <ContentTrackingOrder />
      <Footer />
    </div>
  );
}; 

export default TrackingOrder;
