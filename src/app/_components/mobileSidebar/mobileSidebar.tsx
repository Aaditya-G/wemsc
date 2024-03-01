import { myPlaylists } from "@/app/data/playlists";
import { CardList } from "./cardList";
import { ProfileComponent } from "./profile";
import { recentlyPlayed } from "@/app/data/recently-played";
import { NewPlayListButton } from "./newPlaylistButton";
import { useEffect } from "react";

interface MobileSidebarProps {
  isVisible: boolean;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isVisible }) => {
  return (
    <div
      className={`transform top-0 left-0 w-[75%] bg-bgp fixed h-screen overflow-auto ease-in-out transition-all duration-500 z-50 flex flex-col justify-between ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="div">
        <ProfileComponent name="Aaditya Gupta" />
        <div className="div">
          <CardList cards={recentlyPlayed} sectionTitle="Recently Played" />
          <CardList cards={myPlaylists} sectionTitle="My Playlist" />
        </div>
      </div>

      <div className="flex-end">
        <NewPlayListButton />
      </div>
    </div>
  );
};

export default MobileSidebar;
