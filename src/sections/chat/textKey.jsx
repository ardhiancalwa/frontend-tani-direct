import React, { useState, useEffect, useRef } from "react";
import SendIcon from "../../assets/images/send.svg";

import ProfilePembeli from "../../assets/images/profile_chat_pembeli.png";
import ProfilePenjual from "../../assets/images/profile_chat.png";
import OpenFileIcon from "../../assets/images/openFIle.svg";

const TextKeyboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "buyer", text: searchTerm },
      ]);
      setSearchTerm("");
    }
  };

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].sender === "buyer"
    ) {
      const botReply = "Selamat Siang Kak! Silahkan dilihat-lihat produk segar kami. Untuk pemesanan, silahkan melakukan pembayaran terlebih dahulu. Pesanan akan segara diproses ke dalam pengiriman.";
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "seller", text: botReply },
        ]);
      }, 1000); // Delay 1 detik sebelum bot membalas
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex flex-row row-auto items-end mt-5 ${
              message.sender === "buyer" ? "justify-end" : "justify-start"
            }`}
          >
            {message.sender === "seller" && (
              <div>
                <img
                  src={ProfilePenjual}
                  className="w-9 h-9 lg:w-10 lg:h-10"
                  alt="profile_penjual"
                />
              </div>
            )}
            <div style={{ width: 20 }}></div>
            <div
              className="flex flex-row row-auto border h-auto border-gray border-opacity-50"
              style={{ borderRadius: 10 }}
            >
              {message.sender === "seller" && (
                <div className="bg-primary w-2 rounded-l-full"></div>
              )}
              <div
                className="p-2 lg:p-6 text-xs md:text-[14px] leading-normal text-start lg:text-xl font-medium font-inter max-w-52 md:max-w-96 lg:max-w-2xl"
                style={{ wordWrap: "break-word" }}
              >
                {message.text}
              </div>
              {message.sender === "buyer" && (
                <div className="bg-primary w-2 rounded-r-full"></div>
              )}
            </div>
            <div style={{ width: 20 }}></div>
            {message.sender === "buyer" && (
              <div>
                <img
                  src={ProfilePembeli}
                  className="w-9 h-9 lg:w-10 lg:h-10"
                  alt="profile_pembeli"
                />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="h-10 md:h-[46px] lg:h-[52px]"></div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center rounded-lg h-11 md:h-14 lg:h-28 mb-5 md:mb-8"
      >
        <span className="flex items-center justify-center w-full h-full rounded-xl ring-2 ring-black pr-3 lg:pr-7 pl-1 space-x-2 lg:space-x-4 bg-gray-100">
          <input
            type="text"
            placeholder="Type a new message here"
            value={searchTerm}
            onChange={handleInputChange}
            className="flex-1 px-2 lg:px-6 lg:py-2 text-base md:text-xl lg:text-2xl font-semibold text-black opacity-70 font-inter rounded-none focus:outline-none placeholder-black"
          />
          <button type="submit">
            <img
              src={OpenFileIcon}
              className="md:w-9 md:h-9 lg:w-14 lg:h-14 w-7 h-7"
              alt="send icon"
            />
          </button>
          <button type="submit">
            <img
              src={SendIcon}
              className="md:w-9 md:h-9 lg:w-14 lg:h-14 w-7 h-7"
              alt="send icon"
            />
          </button>
        </span>
      </form>
    </div>
  );
};

export default TextKeyboard;
