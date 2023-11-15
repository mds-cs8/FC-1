import logo from "../../assets/react.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ModeToggle from "./ModeToggle";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SettingMenu from "./SettingMenu";
import { useState } from "react";
export default function NavBar() {
  const [openSetting, setOpenSetting] = useState(false);
  return (
    <nav className="fixed top-0 right-0 mb-4 z-20 px-4 flex justify-between items-center h-[40px] w-full bg-slate-700 font-extrabold text-white">
      {/* logo box */}
      <div className="flex gap-2">
        <img src={logo} alt="logo" className="w-[30px]" />
        <h4>
          البيانات التشغيلية للتفويج
          <span className="mx-2 text-gray-400">|</span>
          وزارة الحج والعمرة
        </h4>
      </div>

      {/* setting box */}
      <div className="flex w-[40%] xl:w-[30%] justify-between items-center">
        <div className="relative ">
          <button
            onClick={() => {
              setOpenSetting(!openSetting);
            }}
            className="border-l-[0.5px]   p-2 border-gray-400 flex justify-center items-center"
          >
            الاعدادات
            <KeyboardArrowDownIcon />
          </button>
          {openSetting && (
            <SettingMenu open={openSetting} setOpen={setOpenSetting} />
          )}
        </div>

        <ModeToggle />
        <button>
          الدخول الى البوابة
          <KeyboardBackspaceIcon className="mr-2" />
        </button>
      </div>
    </nav>
  );
}
