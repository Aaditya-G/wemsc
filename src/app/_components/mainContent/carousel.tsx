"use client";
import React, { useRef } from "react";
import Card from "./card";
import type { ICarouselProps } from "./interfaces";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CardCarousel: React.FC<ICarouselProps> = ({ title, cards }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      //   const cardWidth = 15vw; // Width of the card
      const scrollAmount = carouselRef.current.offsetWidth / 4; // Scrolls half the width of the carousel
      if (direction === "left") {
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="flex flex-col my-4">
      <div className="flex flex-row justify-between items-center mb-4">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-base cursor-pointer">see all</div>
      </div>

      <div className="flex flex-row items-center">
        <div
          className=" cursor-pointer  -translate-x-2"
          onClick={() => scroll("left")}
        >
          <ArrowBackIosIcon />
        </div>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-8 scrollbar-hide"
        >
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
        <div
          className="cursor-pointer translate-x-2"
          onClick={() => scroll("right")}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
