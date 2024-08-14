import React, { useState, useEffect, useRef } from "react";

import CardProductRecomendations from "../../components/common/card_produk_recomendation";
import ArrowRight from "../../assets/images/arrow_right.svg";
import ArrowLeft from "../../assets/images/arrow_left.svg";

const Recomendation = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const cards = [
    { id: 1, image: "image1", title: "Card 1" },
    { id: 2, image: "image2", title: "Card 2" },
    { id: 3, image: "image3", title: "Card 3" },

    // Tambahkan kartu lainnya jika perlu
  ];

  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const handlePreviousCard = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRefs.current[currentCard];
    if (container && card) {
      // Get container width and card width
      const containerWidth = container.offsetWidth;
      const cardWidth = card.offsetWidth;

      // Calculate the scroll position to center the card
      const cardOffsetLeft = card.offsetLeft;
      const cardCenterOffset = cardOffsetLeft + cardWidth / 2;
      const containerCenter = containerWidth / 1.2;
      const scrollPosition = cardCenterOffset - containerCenter;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentCard]);

  return (
    <div
      className="flex flex-col items-start justify-center 2xl:pt-[63px]"
    >
      <div className="font-bold font-inter text-black text-[15px] md:text-[25px] lg:text-[30px] 2xl:text-[45px]">
        Must-Have Items
      </div>
      <div className="h-[0px] 2xl:h-[60px]"></div>
      <div className="flex flex-row gap-2 w-full justify-between items-center">
        <img
          src={ArrowLeft}
          alt="arrow left"
          onClick={handlePreviousCard}
          className="cursor-pointer w-[24px] h-[24px] md:w-[42px] md:h-[42px] xl:w-[60px] xl:h-[60px]"
        />
        <div
          className="pt-[30px] snap-x md:h-[340px] lg:h-[450px] xl:h-[720px] h-[200px] snap-mandatory overflow-hidden"
          ref={containerRef}
        >
          <div className="flex flex-wrap items-center flex-row w-max">
            {cards.map((card, index) => (
              <CardProductRecomendations
                key={card.id}
                image={card.image}
                title={card.title}
                isActive={index === currentCard}
                cardRef={(el) => (cardRefs.current[index] = el)}
              />
            ))}
          </div>
        </div>
        <img
          src={ArrowRight}
          alt="arrow right"
          onClick={handleNextCard}
          className="cursor-pointer w-[24px] h-[24px] md:w-[42px] md:h-[42px] xl:w-[60px] xl:h-[60px]"
        />
      </div>
    </div>
  );
};

export default Recomendation;