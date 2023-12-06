import React from "react";

const Member = ({ image, name }) => {
  return (
    <div className="group">

      <button className="w-[10.5vw] h-[20vh] border-2 bg-purple-900 bg-opacity-[15%] border-white border-opacity-10 flex justify-center items-center transition-all duration-75 rounded-2xl group-hover:shadow-md group-hover:bg-opacity-40 overflow-hidden group-hover:shadow-purple-800 group-focus:border-opacity-40 group-focus:shadow-md group-focus:bg-opacity-40 group-focus:shadow-purple-800">
        {/* <div className="rounded-full w-[17vh] h-[17vh] flex justify-center border-purple-600 border-opacity-30 bg-white bg-opacity-5 border mt-6 group-focus:bg-white fixed z-10" /> */}
        <img src={image} className="h-[22vh] mt-[2vh] w-auto" />
      </button>

      <div className="absolute opacity-70 z-40 mt-[20vh] hidden group-hover:block group-hover:mt-0 transition-all duration-200">
        <div className="w-[10.5vw] h-[20vh] bg-gradient-to-t from-black from-10% to-transparent  -mt-[20vh] transition-all duration-100 rounded-2xl text-white font-semibold text-[1.5vh] flex justify-center items-end focus:border-opacity-40 focus:shadow-md focus:bg-opacity-40 focus:shadow-purple-800">
          <p className="mb-[1vh]">{name}</p>
        </div>
      </div>

      <button className="absolute mt-[20vh] hidden group-hover:block group-hover:-mt-[20vh] transition-all duration-200 w-[10.5vw] h-[20vh] focus:border-opacity-40 focus:shadow-md focus:bg-opacity-40 focus:shadow-purple-800 focus:block focus:-mt-[20vh] z-50 rounded-2xl" />
    </div>
  );
};

export default Member;
