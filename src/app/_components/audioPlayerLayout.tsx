"use client"
import React from 'react';
import AudioPlayerComponent from './audioPlayer';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

const AudioPlayerLayout = ({ songUrl } : {songUrl : string}) => {
  const player:any = React.useRef(null);
  const [volume, setVolume] = React.useState(1);

  const handleVolumeChange = (event : any, newValue : any) => {
    setVolume(newValue);
    if (player.current && player.current.audio.current) {
      player.current.audio.current.volume = newValue;
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-black text-white w-full">
      <div className="flex flex-col justify-center items-start">
        <span>Date</span>
        <span>Date</span>
      </div>

      <div className="flex-1 mx-4">
        <AudioPlayerComponent songUrl={songUrl} />
      </div>

      <div className="flex flex-col justify-center items-center">
        <IconButton aria-label="decrease volume">
          <VolumeDownIcon />
        </IconButton>
        <Slider
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          aria-labelledby="continuous-slider"
          className="w-24"
        />
        <IconButton aria-label="increase volume">
          <VolumeUpIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default AudioPlayerLayout;
