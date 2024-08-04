import React, { useState } from "react";

import CardProductRecomendations from "../../components/common/card_produk_recomendation";
import ArrowRight from "../../assets/images/arrow_right.svg";
import ArrowLeft from "../../assets/images/arrow_left.svg";

const Recomendation = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const cards = [
    { id: 1, image: "image1", title: "Card 1" },
    { id: 2, image: "image2", title: "Card 2" },
    { id: 3, image: "image3", title: "Card 3" },
    //...
  ];

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const handlePreviousCard = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  return (
    <div className="flex flex-col items-start pt-[40px] lg:pt-[63px]">
      <div className="font-bold font-inter text-[20px] md:text-[30px] lg:text-[40px] text-black">
        Must-Have Items
      </div>
      <div className="h-[20px] lg:h-[60px] "></div>
      <div className="flex flex-row row-auto justify-center w-full items-center">
        <img
          src={ArrowLeft}
          className="w-[20px] h-[20px] md:w-[35px] md:h-[35px] lg:w-[65px] lg:h-[65px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          alt="arrow left"
          onClick={handlePreviousCard}
        />

        <div className="w-[5px] lg:w-[150px]"></div>
        {cards.map((card, index) => (
          <CardProductRecomendations
            key={card.id}
            image={card.image}
            title={card.title}
            isActive={index === currentCard}
          />
        ))}
        <div className="w-[5px] lg:w-[150px]"></div>
        <img
          src={ArrowRight}
          className="w-[20px] h-[20px] md:w-[35px] md:h-[35px] lg:w-[65px] lg:h-[65px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          alt="arrow right"
          onClick={handleNextCard}
        />
      </div>
    </div>
  );
};

export default Recomendation;
