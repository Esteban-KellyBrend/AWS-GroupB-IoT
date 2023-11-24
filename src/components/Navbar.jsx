import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

// ... (other imports)

function Navbar() {
  const [showWow, setShowWow] = useState(false);

  const NavBtns = [
    {
      title: "Home",
      iconn: "iconamoon:home-bold",
      link: "/Dashboard",
      onMouseEnter: () => setShowWow(false)
    },
    {
      title: "Statistics",
      iconn: "mdi:graph-line",
      link: "#",
      onMouseEnter: () => setShowWow(true),
    },
    {
      title: "Hardware",
      iconn: "tabler:share",
      link: "#",
      onMouseEnter: () => setShowWow(false)
    },
    {
      title: "About",
      iconn: "mdi:information-outline",
      link: "/About",
    },
    {
      title: "Sign Out",
      iconn: "mdi:sign-out",
      link: "/",
    },
  ];

  const StatBtn = [
    {
      title: "Wind Speed",
      link: "/WindSpeedStats",
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
    <div className="opacity-100 md:opacity-100 z-100 absolute flex flex-row group">
      <div
        onMouseEnter={() => setShowWow(false)}
        className="h-[100vh] w-[8vw] bg-transparent group hover:bg-black hover:w-[15vw] transition-all duration-200"
      >
        <div className=" flex justify-center pt-5">
          <div className=" border border-white border-opacity-30 w-20 rounded-full h-20 flex items-center justify-center">
            <img src="https://scontent.fmnl5-2.fna.fbcdn.net/v/t1.15752-9/369034377_1409327419679665_1168268981160908960_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGKiXmkWQ1I90f4sqQ3JE_eK9Ji9_h7vTgr0mL3-Hu9OLKKNB6T3mRIAEGWWMB7LNDMwHLksefcwlI5mUS_FZ1T&_nc_ohc=uqmeni3iNbEAX8953KQ&_nc_oc=AQnwmFHWJkHxItgZSr7ETRi9hBX34k_GQQJfL5pa2sjRrjAovUcblQ-rNozr_9tZJogoqj5Z8kBxa2kl8OGeYNkO&_nc_ht=scontent.fmnl5-2.fna&oh=03_AdQ_bIC5RLZPOQgMQu-KbTo5sHura8s8_6GHF_x4UYTK5A&oe=6582858C" />
          </div>
        </div>

        <section className="mt-20 flex justify-between items-center flex-col gap-1">
          {NavBtns.map((btn, index) => (
            <Link
              to={btn.link}
              key={index}
              className="w-[80%] group-hover:w-[90%] group-hover:border group-hover:border-white group-hover:border-opacity-30 flex flex-row items-center gap-1 justify-center group focus:bg-[#9E7FA9] focus:bg-opacity-20 focus:border focus:border-white focus:border-opacity-30 group-focus:bg-transparent hover hover:bg-[#9E7FA9] hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-30"
              onMouseEnter={btn.onMouseEnter}
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

      <div
        className={`transition-all duration-200 mt-3 w-[15vw] h-[100vh] bg-[#212121] ${showWow ? "" : "hidden"}`}
        onMouseEnter={() => setShowWow(true)}
        onMouseLeave={() => setShowWow(false)}
      >
        <section className="flex flex-col mt-3 items-center justify-center overflow-y-auto">
          {StatBtn.map((btn, index) => (
            <Link
              to={btn.link}
              className="w-[90%] h-[8vh] border border-[#626262] border-opacity-60 hover:bg-[#9E7FA9] hover:text-opacity-100 text-white  text-opacity-50 hover:bg-opacity-20 hover:border-white hover:border-opacity-50 pt-2"
              key={index}
            >
              <p className="text-xl hidden group-hover:block group-hover:justify-end font-semibold pr-2 pl-5">
                {btn.title}
              </p>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Navbar;
