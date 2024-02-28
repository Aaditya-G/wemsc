import React from "react";
import Card from "./card";
import type { ICarouselProps } from "./interfaces";

const CardCarousel: React.FC<ICarouselProps> = ({ title, cards }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-auto gap-4">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
