import MainContent from "./_components/mainContent";
import PlayerControls from "./_components/playerControl/playerControls";
import RightSidebar from "./_components/rightSidebar/rightSidebar";
import Sidebar from "./_components/leftSidebar/leftSidebar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-betweenx max-h-[88vh]">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <div className="max-h-[12vh]">
        <PlayerControls />
      </div>
    </div>
  );
}
