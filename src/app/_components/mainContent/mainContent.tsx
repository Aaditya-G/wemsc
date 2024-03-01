import React from "react";
import SearchBar from "./searchBar";
import Hero from "./hero";
import CardCarousel from "./carousel";
import { trendingCards } from "@/app/data/trendingSongs";
import { newReleaseCards } from "@/app/data/newSongs";

export default function MainContent({ name }: { name: string }) {
  return (
    <div className="bg-bgs w-full h-full flex flex-col gap-2 overflow-y-auto px-4 md:px-8 scrollbar-hide">
      <div>
        <SearchBar />
        <div className="">
          <Hero />
          <CardCarousel title={`Hello , ${name}`} cards={trendingCards} />
          <CardCarousel title="New Releases For You" cards={newReleaseCards} />
        </div>
      </div>
    </div>
  );
}
