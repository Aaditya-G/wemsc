"use client"
import React from 'react';
import AudioPlayerComponent from './audioPlayer';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import VolumeUpIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import MicIcon from '@mui/icons-material/MicRounded';
import DevicesIcon from '@mui/icons-material/DevicesRounded';
import SharingIcon from '@mui/icons-material/ShareRounded';

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
    <div className="flex justify-between items-center p-4 text-white w-full">
      <div className="flex flex-col justify-center items-start">
        <span>Date</span>
        <span>Date</span>
      </div>

      <div className="flex-1 mx-4">
        <AudioPlayerComponent songUrl={songUrl} />
      </div>

      <div className="flex flex-row justify-center items-center gap-2">
             <VolumeUpIcon />
        
   
        <Slider
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          aria-labelledby="continuous-slider"
          className="w-24"
          size='small'
        />
        <MicIcon/>
        <DevicesIcon />
        <SharingIcon />
        

      </div>
    </div>
  );
};

export default AudioPlayerLayout;
