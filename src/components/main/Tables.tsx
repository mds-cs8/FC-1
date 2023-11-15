export default function Tables({ text, list }: any) {
  console.log(list);

  return (
    <div className="w-[calc(100%/3)] h-[100%] flex flex-col items-center border-l-[0.5px] border-slate-400/40 ">
      <h3 className="text-xl font-bold mt-4">{text}</h3>

      <div className="w-full h-full overflow-y-auto flex flex-col ">
        <div className="flex text-slate-400 font-extrabold w-full justify-between px-4 py-2 border-b-[0.5px] border-slate-400/40">
          <p className="w-[calc(100%/3)]">الفوج</p>
          <p className="w-[calc(100%/3)]">الخروج</p>
          <p className="w-[calc(100%/3)]">الوصول</p>
        </div>
        {list?.length === 0 && (
          <p className="text-center mt-2 text-slate-400 font-extrabold">
            لا توجد بيانات
          </p>
        )}

        <div className="py-2 h-[100%] overflow-y-auto">
          {list.map((foj: any, i: any) => {
            return (
              <div
                key={i}
                className="flex w-full justify-between px-4 py-2 border-b-[0.5px] border-slate-400/40"
              >
                <p className="w-[calc(100%/3)]">{foj.foj}</p>
                <p className="w-[calc(100%/3)]">{foj.exit}</p>
                <p className="w-[calc(100%/3)]">{foj.come}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
