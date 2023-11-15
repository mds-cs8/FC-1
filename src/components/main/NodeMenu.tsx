import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";

export default function NodeMenu() {
  <Menu
    menuButton={<MenuButton>{"top"}</MenuButton>}
    direction={"top"}
    align={"center"}
    position={"anchor"}
    viewScroll={"auto"}
    arrow={true}
    gap={12}
  >
    {["Apple", "Banana", "Blueberry", "Cherry", "Strawberry"].map((fruit) => (
      <MenuItem key={fruit}>{fruit}</MenuItem>
    ))}
  </Menu>;
}
