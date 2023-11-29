import React from "react";


const Member = ({ image }) => {
  return (
    <div>
      <button className="w-[10.5vw] h-[20vh] border-2 bg-purple-900 bg-opacity-[15%] border-white border-opacity-10 flex justify-center items-center transition-all duration-75 rounded-2xl hover:shadow-md hover:bg-opacity-40 overflow-hidden hover:shadow-purple-800 focus:border-opacity-40 focus:shadow-md focus:bg-opacity-40 focus:shadow-purple-800">
        <div className="rounded-full w-[17vh] h-[17vh] flex justify-center border-purple-600 border-opacity-30 bg-white bg-opacity-5 border mt-6 group-focus:bg-white fixed z-10" />
        <img src={image} className="h-[18vh] rounded-full mt-[2vh] z-20"/>
        
      </button>
    </div>
  );
};

export default Member;