export default function SettingMenu({ open, setOpen }: any) {
  return (
    <div className="flex flex-col absolute top-[40px] left-0 w-[100px] py-[15px] border-l-[0.5px] border-gray-400 transition-all duration-300  bg-slate-800 z-10   ">
      <ul className="flex w-full flex-col justify-center items-center gap-4">
        <li
          className="w-full text-center hover:bg-white hover:text-black transition-all duration-300 p-2 cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          logout
        </li>
      </ul>
    </div>
  );
}
