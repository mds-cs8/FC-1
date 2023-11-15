import { FocusableItem, Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { useState } from "react";
import Modal from "./Modal";

export default function Nodes() {
  const [filter, setFilter] = useState("");

  return (
    <div className="relative">
      <Menu
        menuClassName="bg-slate-600 w-[100px] text-white"
        menuButton={
          <MenuButton className="text-black font-extrabold text-xl w-[100px] h-[100px] bg-slate-500 hover:bg-teal-600 transition-all duration-300 rounded-full">
            {1000}
          </MenuButton>
        }
        direction={"top"}
        align={"center"}
        position={"anchor"}
        viewScroll={"auto"}
        arrow={true}
        arrowProps={{
          className: "bg-inherit",
        }}
      >
        <FocusableItem className={"w-full"}>
          {({ ref }) => (
            <input
              className="border-b-2 p-2 w-full bg-inherit focus:outline-none"
              ref={ref}
              type="text"
              placeholder="ابحث"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          )}
        </FocusableItem>
        {["Apple", "Banana"]
          .filter((fruit) =>
            fruit.toUpperCase().includes(filter.trim().toUpperCase())
          )
          .map((fruit) => (
            <MenuItem
              className={"hover:bg-slate-700 transition-all duration-300 "}
              key={fruit}
            >
              <Modal />
            </MenuItem>
          ))}
      </Menu>

      <h3 className="text-white font-extrabold text-xl text-center mt-2">
        JMR
        <br />
        محطة الجمرات
      </h3>
      {/* {openNode && <NodeMenu openNode={openNode} setOpenNode={setOpenNode} />} */}
    </div>
  );
}
