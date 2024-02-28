import React from "react";
import type { ICard } from "./interfaces";

const Card: React.FC<{ card: ICard }> = ({ card }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={card.imageUrl} alt={card.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{card.title}</div>
        <p className="text-gray-700 text-base">{card.artist}</p>
      </div>
    </div>
  );
};

export default Card;
