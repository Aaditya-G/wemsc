import React from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import PlayArrow from "@mui/icons-material/PlayArrowRounded";
import { PauseCircleFilled } from "@mui/icons-material";
import SkipNextRounded from "@mui/icons-material/SkipNextRounded";
import { SkipPreviousRounded } from "@mui/icons-material";
import ShuffleOutlined from "@mui/icons-material/ShuffleOutlined";
import { Loop } from "@mui/icons-material";

const AudioPlayerComponent = ({ songUrl }: { songUrl: string }) => {
  const player: any = React.useRef(null);

  const setVolume = (value: any) => {
    if (player.current && player.current.audio.current) {
      player.current.audio.current.volume = value;
    }
  };

  return (
    <div className="min-w-[40vw] md:px-[15vw] min-h-[10vh]">
      <AudioPlayer
        style={{ backgroundColor: "#101011" }} // tailwind classes are not working here for some reason
        ref={player}
        autoPlay={false}
        src={songUrl}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
        customControlsSection={[
          RHAP_UI.ADDITIONAL_CONTROLS,
          <ShuffleOutlined className="xs:max-sm:hidden" key="shuffle" />,
          RHAP_UI.MAIN_CONTROLS,
          <Loop className="xs:max-sm:hidden" key="loop" />,
          RHAP_UI.VOLUME_CONTROLS,
        ]}
        customVolumeControls={[]}
        customAdditionalControls={[]}
        layout="stacked-reverse"
        customIcons={{
          //put color as white in sx
          play: <PlayArrow sx={{ color: "white", fontSize: "32px" }} />,
          pause: (
            <PauseCircleFilled sx={{ color: "white", fontSize: "32px" }} />
          ),
          next: <SkipNextRounded sx={{ color: "white", fontSize: "32px" }} />,
          previous: (
            <SkipPreviousRounded sx={{ color: "white", fontSize: "32px" }} />
          ),
        }}
      />
    </div>
  );
};

export default AudioPlayerComponent;
