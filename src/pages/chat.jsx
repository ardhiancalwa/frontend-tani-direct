import React, { useState, useEffect } from "react";
import HeaderChat from "../sections/chat/header";
import ContentChat from "../sections/chat/content_chat";
// import TextKeyboard from "../sections/chat/textKey";
import Navbar from "../components/specific/navbar";

const ChatPage = () => {
  const [isLG, setIsLG] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLG(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen grid grid-rows-[2fr,auto,1fr] max-w-screen-sm md:max-w-screen-md lg:max-w-full px-5 md:px-[70px] lg:px-[125px] py-2">
      {isLG ? <HeaderChat /> : <Navbar />}
      <div className="pt-[10px] lg:pt-0 "></div>
      <ContentChat />
      {/* <TextKeyboard /> */}
    </div>
  );
};

export default ChatPage;
