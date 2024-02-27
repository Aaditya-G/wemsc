"use client"
import Burger from "@mui/icons-material/MenuOpenRounded";
import Home from "@mui/icons-material/HomeRounded";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import Discover from "@mui/icons-material/ExploreRounded";
import DiscoverOutlined from "@mui/icons-material/ExploreOutlined";
import Collections from "@mui/icons-material/CollectionsBookmarkRounded";
import CollectionsOutlined from "@mui/icons-material/CollectionsBookmarkOutlined";
import Download from "@mui/icons-material/GetAppRounded";
import DownloadOutlined from "@mui/icons-material/GetAppOutlined";
import Favourites from "@mui/icons-material/FavoriteRounded";
import FavouritesOutlined from "@mui/icons-material/FavoriteBorderRounded";
import LocalFiles from "@mui/icons-material/FolderRounded";
import LocalFilesOutlined from "@mui/icons-material/FolderOutlined";
import { ReactElement, useState } from "react";
import { SvgIconProps } from "@mui/material";

type HoverIconProps = {
  OutlinedIcon: React.FC<SvgIconProps>;
  FilledIcon: React.FC<SvgIconProps>;
  descriptor: string;
};

function HoverIcon({ OutlinedIcon, FilledIcon, descriptor, ...props }: HoverIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group icon-box"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {isHovered ? <FilledIcon className="icon"/> : <OutlinedIcon className="icon"/>}
      <span className="icon-descriptor">{descriptor}</span>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="w-[20vw] h-screen bg-gray-900 p-5 flex flex-col justify-between">
      <div className="upper-box flex flex-col">
        <div className="header flex flex-row justify-between items-center mb-6">
          <div className="wemsc-logo text-5xl font-extrabold text-indigo-500">
            W {/*todo -> take this from image*/}
          </div>
          <Burger className="icon hover:text-blue-600"/>
        </div>
        <div className="features flex flex-col mb-4 gap-2">
          <div className="text-md  font-light text-primary">
            FEATURES
          </div>
          <HoverIcon 
            OutlinedIcon={HomeOutlined} 
            FilledIcon={Home} 
            descriptor="Home"
          />
          <HoverIcon 
            OutlinedIcon={DiscoverOutlined} 
            FilledIcon={Discover} 
            descriptor="Discover"
          />
          <HoverIcon 
            OutlinedIcon={CollectionsOutlined} 
            FilledIcon={Collections} 
            descriptor="Collections"
          />
        </div>
        <div className="library mb-4 flex flex-col gap-2">
          <div className="text-md font-light text-primary">
            LIBRARY
          </div>
          <HoverIcon 
            OutlinedIcon={DownloadOutlined} 
            FilledIcon={Download} 
            descriptor="Download"
          />
          <HoverIcon 
            OutlinedIcon={FavouritesOutlined} 
            FilledIcon={Favourites} 
            descriptor="Favourites"
          />
          <HoverIcon 
            OutlinedIcon={LocalFilesOutlined} 
            FilledIcon={LocalFiles} 
            descriptor="Local Files"
          />
        </div>
      </div>
      <div className="lower-box">
        {/* Placeholder for lower box content */}
      </div>
    </div>
  )
}
