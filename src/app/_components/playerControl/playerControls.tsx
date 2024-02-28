import AudioPlayerLayout from "./audioPlayerLayout";

export default function PlayerControls() {
  return (
    <div className="flex items-center justify-between p-3 bg-bgp  text-white">
      <AudioPlayerLayout songUrl="music.mp3" />
    </div>
  );
}
