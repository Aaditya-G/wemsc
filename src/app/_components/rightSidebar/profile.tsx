import Image from "next/image";
import pic9 from "@/app/_assets/pic9.png";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export const ProfileComponent = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-row justify-between items-center space-x-3 text-white m-4 h-[10vh]">
      <div className="flex flex-row items-center gap-4">
        <Image
          src={pic9}
          alt="profile"
          width={50}
          height={50}
          className="rounded-full aspect-square"
        />
        <div className="text-base hover:text-base  hover:font-semibold transition-all duration-300 cursor-pointer">
          {name}
        </div>
      </div>
      <div className="icons flex flex-row">
        <div className="group">
          <NotificationsOutlinedIcon className="icon" />
        </div>
        <div className="group">
          <ExpandMoreOutlinedIcon className="icon" />
        </div>
      </div>
    </div>
  );
};
