const Display = ({ type, name, meas, unit }) => {
    return (
        (type === 1) ? (
          <div>
          <p className="text-white flex text-2xl text-opacity-70 pb-1 indent-3">
            {name}
          </p>
          <div className=" w-[230px] h-[60px] rounded-2xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex flex-row">
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
        ) : null  // Add this line to handle the case when type is not equal to 1
    );
  };
  
  export default Display;
  