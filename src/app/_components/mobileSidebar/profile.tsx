import Image from "next/image";
import pic9 from "@/app/_assets/pic9.png";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import useSidebarStore from "../../store/mobileSidebarStore";

export const ProfileComponent = ({ name }: { name: string }) => {
  const setSidebarVisibility = useSidebarStore(
    (state) => state.setSidebarVisibility
  );

  const handleCloseSidebar = () => {
    setSidebarVisibility(false);
  };
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
        <div className="text-xs text-white hover:text-blue-600 font-bold cursor-pointer hover:scale-110 transition-all duration-500 break-words">
          {name}
        </div>
      </div>
      <div className="icons flex flex-row">
        <div className="group">
          <CloseOutlinedIcon className="icon" onClick={handleCloseSidebar} />
        </div>
      </div>
    </div>
  );
};
