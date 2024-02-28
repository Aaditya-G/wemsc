import React from "react";
import Header from "./header";
import Hero from "./hero";
import CardCarousel from "./carousel";
import { trendingCards } from "@/app/data/trendingSongs";
import { newReleaseCards } from "@/app/data/newSongs";

export default function MainContent() {
  return (
    <div className="bg-bgs w-full h-full flex flex-col overflow-y-auto">
      <div>
        <Header />
        <div className="pt-24">
          <Hero />
          <CardCarousel title="Trending" cards={trendingCards} />
          <CardCarousel title="New Releases" cards={newReleaseCards} />
          <div className="h-[200vh] bg-blue-200"></div>
        </div>
      </div>
    </div>
  );
}
