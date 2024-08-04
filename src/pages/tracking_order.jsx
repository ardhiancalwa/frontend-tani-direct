import React from "react";
import NavbarPembeli from "../components/specific/navbar";
import HeaderTrackingOrder from "../sections/tracking_order/header";
import ContentTrackingOrder from "../sections/tracking_order/content";
import Footer from "../components/specific/footer";
import Header from "../components/common/header";

const TrackingOrder = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[10px] lg:px-[240px]">
      <NavbarPembeli />
      <Header title={"Tracking Order"} onClick={() => window.history.back()} />
      <ContentTrackingOrder />
      <Footer />
    </div>
  );
};

export default TrackingOrder;
