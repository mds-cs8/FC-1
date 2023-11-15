interface IArrows {
  value: string | number;
}

const StrightArrow = ({ value }: IArrows) => {
  return (
    <div className="group text-center w-full font-extrabold">
      <p className="text-gray-300 group-hover:text-white transition-all duration-300">
        {value}
      </p>
      <p
        className={`relative border-gray-400 border-[0.5px]  w-full before:absolute before:content-[""] before:border-b-[6px] before:border-t-[6px] before:border-b-transparent before:border-t-transparent before:border-l-[8px] before:border-l-inherit before:right-[-7px] before:top-[-6px] group-hover:border-teal-500 transition-all duration-300`}
      ></p>
    </div>
  );
};

export default StrightArrow;
