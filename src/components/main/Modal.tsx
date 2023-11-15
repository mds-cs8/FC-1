import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import BarChartIcon from "@mui/icons-material/BarChart";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Tables from "./Tables";
import CircularBar from "./CircularProgress";

const fojs = [
  {
    foj: "P1-A02-01",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-02",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-03",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-04",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-05",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-06",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-07",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-08",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-09",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-10",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-11",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-12",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-12",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-13",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-14",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-15",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-16",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-17",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
  {
    foj: "P1-A02-18",
    exit: "08:40:00",
    come: "09:08:00",
  },
];
export default function Modal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full">
      <button onClick={handleClickOpen}>click</button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        PaperProps={{
          style: {
            minWidth: "96%",
            minHeight: "90%",
            maxHeight: "90%",
            padding: 0,
            // background: "rgb(15 , 23 , 42)",
          },
        }}
      >
        <DialogTitle
          className="bg-slate-800"
          sx={{ m: 0, height: "150px", p: 2 }}
          id="customized-dialog-title"
        >
          <div className="h-full items-center flex justify-between text-white">
            <div className="flex  gap-4">
              <div className="flex flex-col justify-center items-center p-2 rounded-md bg-slate-100/10">
                <h2>11</h2>
                <h2>ذي الحجه</h2>
              </div>
              <div className="flex flex-col justify-center font-extrabold">
                <h4 className="text-sm text-slate-400">نفاصيل العملية</h4>
                <h2>منى الى عرفات</h2>
              </div>
            </div>
            <div className="flex justify-evenly w-[700px]">
              <div className="text-center">
                <CircularBar value={5000} />
                <p className="text-base mt-2 font-bold ">المتبقي</p>
              </div>
              <div className="text-center">
                <CircularBar value={5000} />
                <p className="text-base mt-2 font-bold ">المتبقي</p>
              </div>
              <div className="text-center">
                <CircularBar value={5000} />
                <p className="text-base mt-2 font-bold ">المتبقي</p>
              </div>
              <div className="text-center">
                <CircularBar value={5000} />
                <p className="text-base mt-2 font-bold ">المتبقي</p>
              </div>
              <div className="text-center">
                <CircularBar value={5000} />
                <p className="text-base mt-2 font-bold ">المتبقي</p>
              </div>
            </div>
            <div className="w-[90px] flex justify-around">
              <button className="w-[30px] h-[30px] flex justify-center items-center bg-slate-400/40 rounded-full">
                <BarChartIcon fontSize="small" />
              </button>
              <button className="w-[30px] h-[30px] flex justify-center items-center bg-slate-400/40 rounded-full">
                <FilterAltIcon fontSize="small" />
              </button>
            </div>
          </div>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          sx={{ p: 0 }}
          className="w-full h-screen  bg-slate-800 border-t-[0.5px] border-slate-400/40 text-white flex justify-between"
        >
          <Tables text={"افواج متبقية"} list={fojs} />
          <Tables text={"افواج وصلت"} list={fojs} />
          <Tables text={"افواج خرجت"} list={[]} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
