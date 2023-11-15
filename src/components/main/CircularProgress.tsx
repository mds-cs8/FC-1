import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

export default function CircularBar({ value }: any) {
  return (
    <div className="progressbar">
      <CircularProgressbar
        value={(value / 7229) * 100}
        strokeWidth={4}
        styles={buildStyles({
          pathColor: "orange",
          trailColor: "gray",
        })}
      />
      <div className="progressbar_inside">
        <span className="text-lg">{7229}</span>
        <span className="text-sm">{value} فوج </span>
      </div>
    </div>
  );
}
