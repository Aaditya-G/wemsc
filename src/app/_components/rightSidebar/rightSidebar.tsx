import { myPlaylists } from "@/app/data/playlists";
import { CardList } from "./cardList";
import { ProfileComponent } from "./profile";
import { recentlyPlayed } from "@/app/data/recently-played";

export default function RightSidebar() {
  return (
    <div className="bg-bgp  w-[20vw] overflow-y-auto">
      <ProfileComponent name="Aaditya Gupta" />
      <CardList cards={recentlyPlayed} sectionTitle="Recently Played" />
      <CardList cards={myPlaylists} sectionTitle="My Playlist" />
    </div>
  );
}
