export default function ProgressLineBar({ title, value }: any) {
  return (
    <div className="w-full h-auto flex justify-center gap-5 items-center my-2 ">
      <h3 className="w-[90px] whitespace-wrap  font-bold">{title}</h3>

      <div className="flex w-[150px] justify-around items-center ">
        <div className="w-[100px] h-[10px] bg-slate-400 rounded-3xl overflow-hidden ">
          <div className={`bg-teal-500 h-full w-[${value}%]`}></div>
        </div>
        <p className="font-bold">{value}%</p>
      </div>
    </div>
  );
}
