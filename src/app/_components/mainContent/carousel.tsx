import React from "react";
import Card from "./card";
import type { ICarouselProps } from "./interfaces";

const CardCarousel: React.FC<ICarouselProps> = ({ title, cards }) => {
  return (
    <div className="flex flex-col my-4">
      <div className="flex flex-row justify-between">
        <div className="text-2xl font-bold mb-4">{title}</div>
        <div className="text-base">see all</div>
      </div>

      <div className="flex overflow-x-auto gap-12">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
