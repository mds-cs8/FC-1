import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches() {
  return (
    <div>
      <span>الوضع الداكن</span>
      <Switch
        sx={{
          "& .Mui-checked": {
            color: "rgb(20 , 184 ,166)",
          },
          "& .MuiSwitch-track": {
            backgroundColor: "rgb(20 , 184 , 166)",
          },
        }}
        className="rotate-180 "
        {...label}
        defaultChecked
      />
    </div>
  );
}
