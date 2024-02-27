import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioPlayerComponent = ({ songUrl } : {songUrl : string}) => {
  const player : any = React.useRef(null);

  const setVolume = (value:any) => {
    if (player.current && player.current.audio.current) {
      player.current.audio.current.volume = value;
    }
  };

  return (
    <AudioPlayer
      ref={player}
      autoPlay={false}
      src={songUrl}
      onPlay={e => console.log("onPlay")}
      showJumpControls={false}
      customVolumeControls={[]} 
      customAdditionalControls={[]}
      customProgressBarSection={[
        RHAP_UI.CURRENT_TIME,
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.DURATION,
      ]}
      customControlsSection={[
        RHAP_UI.MAIN_CONTROLS,
      ]}
    />
  );
};

export default AudioPlayerComponent;
