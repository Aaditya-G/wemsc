import Burger from "@mui/icons-material/MenuOpenRounded"
import Home from "@mui/icons-material/HomeRounded"
import HomeFilled from "@mui/icons-material/Home"

export default function Sidebar() {
  return (
    <div className="w-[20vw] bg-gray-900 text-white p-5 flex flex-col justify-between">
     <div className="upper-box flex flex-col">
      <div className="header flex flex-row justify-between">
          <div className="wemsc-logo">
            {/* WEMSC LOGO*/}
            w
          </div>
          <div className="burger-menu">
            {/* BURGER MENU*/}

            <Burger className="icon"/>
          </div>
      </div>
      <div className="features flex flex-col">
        <div className="text-md">
          FEATURES
        </div>
        <div className="home flex flex-row gap-2 text-4xl">
          <Home className="icon"/>
          Home
        </div>
      </div>
      <div className="library">
        library
      </div>
     </div>
     <div className="lower-box">
          lower box
     </div>
    </div>
  )
}
