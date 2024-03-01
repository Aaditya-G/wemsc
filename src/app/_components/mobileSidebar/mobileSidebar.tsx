import { myPlaylists } from "@/app/data/playlists";
import { CardList } from "./cardList";
import { ProfileComponent } from "./profile";
import { recentlyPlayed } from "@/app/data/recently-played";
import { NewPlayListButton } from "./newPlaylistButton";

export default function MobileSidebar() {
  return (
    <div className="bg-bgp flex flex-col justify-between overflow-y-auto scrollbar-hide h-screen">
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
}
