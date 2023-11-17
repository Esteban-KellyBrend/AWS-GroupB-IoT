const Display = ({ type, name, meas, unit, loc, time, date, direction }) => {
  return (
    (type === 1) ? (
      <div>
        <p className="text-white flex text-2xl text-opacity-70 pb-1 indent-3">
          {name}
        </p>
        <div className=" w-[230px] h-[60px] rounded-2xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex flex-row" ml>
          <div className="w-1/3 h-full px-2">
            <p className="text-white mt-2.5 justify flex justify justify-end text-2xl">
              {meas}
            </p>
          </div>
          <div className="w-1/3 h-full">
            <p className="text-white mt-2.5 justify flex justify justify-start text-2xl">
              {unit}
            </p>
          </div>
        </div>
      </div>
    ) : (type === 2) ? (
      <div>
        <div className="w-[230px] h-[210px] rounded-2xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex flex-col items-center">
          <div className="w-full px-2 text-center mt-2">
            <p className="text-white text-xs">
              {loc}
            </p>
          </div>
          <div className="w-full px-2 text-center">
            <p className="text-white text-xs">
              {date}
            </p>
          </div>
          <div className="w-full px-2 text-center flex-grow flex items-center justify-center">
            <p className="text-white text-7xl font-bold">
              {time}
            </p>
          </div>
        </div>
      </div>
    ) : (type === 3) ? (
      <div>
        <p className="text-white flex text-2xl text-opacity-70 pb-1 indent-3">
          {name}
        </p>
        <div className="w-[321px] h-[411px] rounded-2xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex flex-col items-center relative">
          {/* Placeholder Only*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 251 252"
            className="w-[251px] h-[252px] mt-10"
          >
            <rect width="100%" height="100%" fill="#ccc" />
          </svg>
          <div className="mt-5 w-full px-2 text-center">
            <p className="text-white text-2xl">
              {direction}
            </p>
          </div>
        </div>
      </div>
    ) : (type === 4) ? (
      <div>
        <p className="text-white flex text-2xl text-opacity-70 pb-1 indent-3">
          {name}
        </p>
        <div className="w-[527px] h-[180px] rounded-2xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex flex-col items-center relative">
          {/* Placeholder Only*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 700 180"
            className="w-[700px] h-[100px] mt-3"
          >
            <rect width="100%" height="100%" fill="#ccc" />
          </svg>
          <div className="mt-3 w-full px-2 text-center">
            <p className="text-white text-2xl">
              {direction}
            </p>
          </div>
        </div>
      </div>
    ) : null // Add this line to handle the case when type is not equal to 1 null // Add this line to handle the case when type is not equal to 1
  );
};

export default Display;
