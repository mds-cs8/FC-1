import ProgressLineBar from "./ProgressLineBar";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
const hjajArr = [
  { title: "حجاج الداخل", value: 0 },
  { title: "نقاط التجمع", value: 10 },
  { title: "المسجد الحرام", value: 40 },
  { title: "محطة الجمرات", value: 70 },
  { title: "مخيمات منى", value: 100 },
  { title: "مشعر عرفات", value: 100 },
  { title: "مشعر مزدلفة", value: 100 },
];

export default function SideBar() {
  return (
    <div className="w-[100%] xl:w-[30%] h-[90%] bg-slate-700 rounded-sm flex flex-row xl:flex-col justify-around items-center text-inherit">
      <div className="flex w-[150px] xl:w-full items-center justify-evenly font-bold  ">
        <h1 className="text-4xl xl:text-7xl">11</h1>
        <div className="flex flex-col items-center justify-center text-base xl:text-2xl gap-y-4">
          <h1>ذي الحجة</h1>
          <h1>07:38 - 07:33</h1>
        </div>
      </div>

      <div className="flex flex-wrap w-[300px] xl:w-full justify-center items-center">
        {hjajArr.map((i, index) => {
          return (
            <ProgressLineBar
              key={index}
              title={i.title}
              value={i.value.toString()}
            />
          );
        })}
      </div>

      <div className="flex items-center gap-4 text-2xl">
        <PermIdentityIcon sx={{ fontSize: 40 }} />
        <div className="text-center">
          <h3>عدد الحجاج</h3>
          <p>55,555</p>
        </div>
      </div>
    </div>
  );
}
