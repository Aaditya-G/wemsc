"use client";
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
import Image from "next/image";
import albumImage from "../../_assets/ranjan.png";

type HoverIconProps = {
  OutlinedIcon: React.FC<SvgIconProps>;
  FilledIcon: React.FC<SvgIconProps>;
  descriptor: string;
};

function HoverIcon({
  OutlinedIcon,
  FilledIcon,
  descriptor,
  ...props
}: HoverIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group icon-box"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {isHovered ? (
        <FilledIcon className="icon" />
      ) : (
        <OutlinedIcon className="icon" />
      )}
      <span className="icon-descriptor">{descriptor}</span>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="w-[15vw] bg-bgp flex flex-col justify-between min-h-[88vh]">
      <div className="upper-box p-5 min-h-[50vh]">
        <div className="header flex flex-row justify-between items-center">
          <span className="wemsc-logo text-3xl mb-2 font-extrabold text-indigo-700">
            W
          </span>
          <div className="div">
            <Burger className="icon hover:text-blue-600" />
          </div>
        </div>
        <div className="features flex flex-col my-4">
          <div className="text-xs mb-2  font-light text-primary">FEATURES</div>
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
        <div className="library mb-4 flex flex-col">
          <div className="text-xs mb-2 font-light text-primary">LIBRARY</div>
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
      <div className="lower box max-h=[20vh]">
        <Image src={albumImage} alt="album image" objectFit="cover" />
        {/* <div className="bg-[url(_assets/ranjan.png)] w-full h-56 bg-contain  bg-center aspect-square"> */}
        {/* </div> */}
      </div>
    </div>
  );
}
