import React from "react";
import Header from "./header";
import Hero from "./hero";
import CardCarousel from "./carousel";
import { trendingCards } from "@/app/data/trendingSongs";
import { newReleaseCards } from "@/app/data/newSongs";


export default function MainContent() {
  return (
    <div className="bg-bgs w-full h-full">
      <div>
        <Header />
        <Hero />
        <CardCarousel title="Trending" cards={trendingCards} />
        <CardCarousel title="New Releases" cards={newReleaseCards} />
      </div>
    </div>
  );
}
