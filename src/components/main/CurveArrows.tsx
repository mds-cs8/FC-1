interface IArrows {
  value: string | number;
}

const CurveArrows = ({ value }: IArrows) => {
  return (
    <div className="group text-center w-full">
      <p
        className={`relative h-[15px] border-gray-400 border-r-2 border-b-2 border-l-2 rounded-br-full rounded-bl-full w-full before:absolute before:content-[""] before:border-l-[6px] before:border-r-[6px] before:border-r-transparent before:border-l-transparent before:border-b-[8px] before:border-b-inherit before:left-[-7px] before:top-[-7px] group-hover:border-teal-500 transition-all duration-300`}
      ></p>
      <p className="text-gray-300 group-hover:text-white transition-all duration-300">
        {value}
      </p>
    </div>
  );
};

export default CurveArrows;
