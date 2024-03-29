import { myPlaylists } from "@/app/data/playlists";
import { CardList } from "./cardList";
import { ProfileComponent } from "./profile";
import { recentlyPlayed } from "@/app/data/recently-played";
import { NewPlayListButton } from "./newPlaylistButton";

export default function RightSidebar() {
  return (
    <div className="bg-bgp w-[22vw] hidden xl:flex xl:flex-col overflow-y-auto scrollbar-hide">
      <ProfileComponent name="Aaditya Gupta" />
      <CardList cards={recentlyPlayed} sectionTitle="Recently Played" />
      <CardList cards={myPlaylists} sectionTitle="My Playlist" />
      <NewPlayListButton />
    </div>
  );
}
