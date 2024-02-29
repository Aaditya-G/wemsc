import React from "react";
import heropic from "../../_assets/heropic.png";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="bg-bgh text-center p-6 rounded-2xl flex flex-row justify-between">
      <div className="content flex flex-col items-start justify-between">
        <div className="title text-lg font-bold">New Album</div>
        <div className="songName text-6xl font-extrabold text-white text-left leading-tight">
          THE SECOND STEP: CHAPTER ONE
        </div>
        <div className="albumName text-lg font-extrabold text-primary mt-4">
          TREASURE
        </div>
        <div className="listen-btn mt-4">
          <button>LISTEN NOW</button>
        </div>
      </div>
      <div className="image">
        <Image src={heropic} alt="hero" width={600} height={400} />
      </div>
    </div>
  );
};

export default Hero;
