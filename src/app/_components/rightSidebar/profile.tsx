import Image from "next/image";
import pic9 from "@/app/_assets/pic9.png";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export const ProfileComponent = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-row justify-between items-center space-x-3 text-white mx-4 my-8">
      <div className="flex flex-row items-center gap-4">
        <Image
          src={pic9}
          alt="profile"
          width={50}
          height={50}
          className="rounded-full aspect-square"
        />
        <div className="text-xs 4k:text-lg text-white hover:text-blue-600 font-bold cursor-pointer hover:scale-110 transition-all duration-500 break-words max-w-[5.5vw]">
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
