"use client";
import MainContent from "./_components/mainContent/mainContent";
import PlayerControls from "./_components/playerControl/playerControls";
import RightSidebar from "./_components/rightSidebar/rightSidebar";
import Sidebar from "./_components/leftSidebar/leftSidebar";
import Head from "next/head";
import useSidebarStore from "./store/mobileSidebarStore";
import MobileSidebar from "./_components/mobileSidebar/mobileSidebar";

export default function Home() {
  const { isSidebarVisible, setSidebarVisibility } = useSidebarStore();

  const closeSidebar = () => {
    setSidebarVisibility(false);
  };
  return (
    <>
      <MobileSidebar isVisible={isSidebarVisible}/>
      <div
        className={`flex flex-col h-screen font-sans ${
          isSidebarVisible ? "opacity-50" : "opacity-100"
        }`}
      >
        <div className="flex flex-row justify-between max-h-[87vh]">
          <Sidebar />
          <MainContent name="Aaditya" />
          <RightSidebar />
        </div>
        <div className="max-h-[12vh]">
          <PlayerControls />
        </div>
      </div>
    </>
  );
}
