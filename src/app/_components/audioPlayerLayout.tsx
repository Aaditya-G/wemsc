"use client";
import React from "react";
import AudioPlayerComponent from "./audioPlayer";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import MicIcon from "@mui/icons-material/MicRounded";
import DevicesIcon from "@mui/icons-material/DevicesRounded";
import SharingIcon from "@mui/icons-material/ShareRounded";
import FavouritesOutlined from "@mui/icons-material/FavoriteBorderRounded";
import AddBoxRounded from "@mui/icons-material/AddBoxRounded";

const AudioPlayerLayout = ({ songUrl }: { songUrl: string }) => {
  const player: any = React.useRef(null);
  const [volume, setVolume] = React.useState(1);

  const handleVolumeChange = (event: any, newValue: any) => {
    setVolume(newValue);
    if (player.current && player.current.audio.current) {
      player.current.audio.current.volume = newValue;
    }
  };

  return (
    <div className="flex justify-between items-center p-4 text-white w-full">
      {/*left side component*/}
      <div className="flex flex-row gap-5 px-5 justify-between items-start">
        <div className="flex flex-col">
          <div className="text-sm font-bold">Date</div>
          <div className="text-xs">日付</div>
        </div>
        <div className="icon-box flex flex-row">
          <div className="group">
            <FavouritesOutlined className="icon" />
          </div>
          <div className="group">
            <AddBoxRounded className="icon" />
          </div>
        </div>
      </div>
      {/*center component*/}
      <div className="">
        <AudioPlayerComponent songUrl={songUrl} />
      </div>
      {/*right side component*/}
      <div className="flex flex-row justify-center items-center gap-2">
        <div className="group">
          <VolumeUpIcon className="icon" />
        </div>

        <Slider
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          aria-labelledby="continuous-slider"
          className="w-16"
          size="small"
        />
        <div className="group">
          <MicIcon className="icon" />
        </div>
        <div className="group">
          <DevicesIcon className="icon" />
        </div>
        <div className="group">
          <SharingIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerLayout;
