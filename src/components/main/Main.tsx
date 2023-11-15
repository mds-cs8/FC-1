import CurveArrows from "./CurveArrows";
import Nodes from "./Nodes";
import StrightArrow from "./SrtightArrow";

export default function Main() {
  return (
    <div className="w-[100%] p-4 flex justify-evenly items-center h-[90%] bg-slate-700 rounded-sm relative">
      <div className="flex relative flex-row-reverse justify-between flex-wrap w-[300px] h-[400px] gap-4">
        <Nodes />
        <div
          style={{ rotate: "1 0 0 180deg" }}
          className="absolute w-[70px]  top-[25px] left-[120px] rotate-180"
        >
          <StrightArrow value={0} />
        </div>
        <Nodes />
        <Nodes />
      </div>
      <div className="flex relative justify-between flex-wrap w-[300px] h-[400px] gap-4 ">
        <Nodes />
        <div className="absolute w-[70px]  top-[25px] left-[110px]">
          <StrightArrow value={0} />
        </div>

        <Nodes />
        <div
          style={{ rotate: "1 0 0 180deg" }}
          className="absolute w-[25px]  top-[165px] left-[10px] -rotate-90"
        >
          <StrightArrow value={0} />
        </div>
        <div
          style={{ rotate: "1 0 0 180deg" }}
          className="absolute w-[25px]  top-[170px] left-[60px] rotate-90"
        >
          <StrightArrow value={0} />
        </div>

        <Nodes />
        <div
          style={{ rotate: "1 0 0 180deg" }}
          className="absolute w-[140px]  top-[130px] left-[70px] -rotate-[140deg]"
        >
          <StrightArrow value={0} />
        </div>
        <div className="absolute w-[70px]  top-[240px] left-[110px] ">
          <StrightArrow value={0} />
        </div>
        <div className="absolute w-[70px]  top-[240px] left-[310px] ">
          <StrightArrow value={0} />
        </div>
        <Nodes />
        <div className="absolute w-[450px]  bottom-[-20px] right-[-180px] ">
          <CurveArrows value={0} />
        </div>
      </div>
    </div>
  );
}
