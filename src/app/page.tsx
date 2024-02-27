import MainContent from "./_components/mainContent";
import PlayerControls from "./_components/playerControls";
import RightSidebar from "./_components/rightSidebar";
import Sidebar from "./_components/leftSidebar";
import Head from 'next/head'


export default function Home() {
  return (
   <div className="flex flex-col h-screen justify-between">
      <div className="flex flex-row justify-between">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <PlayerControls />
    </div>
  );
}
