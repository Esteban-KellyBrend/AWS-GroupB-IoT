import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showWow, setShowWow] = useState(false);

  const NavBtns = [
    {
      title: "Home",
      iconn: "iconamoon:home-bold",
      link: "#",
    },
    {
      title: "Statistics",
      iconn: "mdi:graph-line",
      link: "#",
      onFocus: () => setShowWow(true),
      onBlur: () => setShowWow(false),
    },
    {
      title: "Hardware",
      iconn: "tabler:share",
      link: "#",
    },
    {
      title: "About",
      iconn: "mdi:information-outline",
      link: "#",
    },
  ];

  const StatBtn = [
    {
      title: "Wind Speed",
      link: "#",
    },
    {
      title: "Wind Direction",
      link: "#",
    },
    {
      title: "Temperature",
      link: "#",
    },
    {
      title: "Humidity",
      link: "#",
    },
    {
      title: "Heat Index",
      link: "#",
    },
    {
      title: "Solar Irradiance",
      link: "#",
    },
    {
      title: "CO Value",
      link: "#",
    },

  ];

  return (
    <div className="opacity-0 md:opacity-100 z-100 absolute flex flex-row group">
      <div className="h-[100vh] w-[8vw] bg-transparent group hover:bg-black hover:w-[15vw] transition-all duration-200">
        
        <div className=" flex justify-center pt-5">
          <div className=" border border-white w-20 rounded-full h-20 flex items-center justify-center">
            <p className="text-2xl text-violet-500 overflow-hidden justify flex justify-center">
              LOGO
            </p>
          </div>
        </div>
        
        <section className="mt-20 flex justify-between items-center flex-col gap-1">
          {NavBtns.map((btn, index) => (
            <Link
            to={btn.link}
              key={index}
              className="w-[80%] group-hover:w-[90%] group-hover:border group-hover:border-white group-hover:border-opacity-30 flex flex-row items-center gap-1 justify-center group focus:bg-[#9E7FA9] focus:bg-opacity-20 focus:border focus:border-white focus:border-opacity-30 group-focus:bg-transparent hover hover:bg-[#9E7FA9] hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-30"
              onFocus={btn.onFocus}
              onBlur={btn.onBlur}
            >
              <Icon
                icon={btn.iconn}
                className="border border-none text-opacity-20 text-white text-[60px] group-hover:text-[60px] group-hover:pl-2 group-focus:hidden block bg-transparent"
              />

              <Icon
                icon={btn.iconn}
                className="text-[#BC00FF] text-[60px] group-hover:text-[60px] group-hover:pl-2 group-focus:block hidden border border-none bg-transparent"
              />

              <p className="text-white text-opacity-50 focus:text-opacity-100 text-xl hidden group-hover:block group-hover:justify-center font-semibold">
                {btn.title}
              </p>
            </Link>
          ))}
        </section>
      </div>
      <div className={`transition-all duration-200 mt-3 w-[15vw] h-[100vh] bg-[#212121] ${showWow ? "" : "hidden"}`}>
        <section className="flex flex-col mt-3 items-center justify-center overflow-y-auto">
        {StatBtn.map((btn, index) => (
            <Link to={btn.link}>
          <button className="w-[90%] h-[8vh] border border-[#626262] border-opacity-60 hover:bg-[#9E7FA9] hover:text-opacity-100 text-white  text-opacity-50 hover:bg-opacity-20 hover:border-white hover:border-opacity-50">
              <p className="text-xl hidden group-hover:block group-hover:justify-end font-semibold pr-2 pl-5">
                {btn.title}
              </p>
            
          </button>
          </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Navbar;
