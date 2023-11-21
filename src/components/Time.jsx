import React, { useState, useEffect } from "react";

const Time = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false, // Display in 24-hour format
    };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className="w-[17vw] h-[25vh] rounded-2xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex flex-col items-center text-white">
      <div className="w-full px-2 text-center mt-4">
        <p className=" text-xs">Caloocan City, Philippines</p>
      </div>
      <div className="w-full text-center mb-5">
        <p className="text-xs">{formatDate(currentDateTime)}</p>
      </div>
      <div className="w-full px-2 justify-center flex-grow flex">
        <p className="text-6xl font-bold">{formatTime(currentDateTime)}</p>
      </div>
    </div>
  );
};

export default Time;
