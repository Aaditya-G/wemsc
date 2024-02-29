import React from "react";
import SearchBar from "./searchBar";
import Hero from "./hero";
import CardCarousel from "./carousel";
import { trendingCards } from "@/app/data/trendingSongs";
import { newReleaseCards } from "@/app/data/newSongs";

export default function MainContent() {
  return (
    <div className="bg-bgs w-full h-full flex flex-col overflow-y-auto px-8">
      <div>
        <SearchBar />
        <div className="">
          <Hero />
          <CardCarousel title="Hello , Aaditya" cards={trendingCards} />
          <CardCarousel title="New Releases" cards={newReleaseCards} />
          {/* <div className="h-[200vh] bg-blue-200"></div> */}
        </div>
      </div>
    </div>
  );
}
