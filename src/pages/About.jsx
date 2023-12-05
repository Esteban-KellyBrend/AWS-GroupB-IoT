import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Creators from "../components/AboutComponents/Creators";
import ProjectDesc from "../components/AboutComponents/ProjectDesc";
import System from "../components/AboutComponents/System";
import NavNav from "../components/Nav/NavNav";
import Trail from "../components/Trail";

function About() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className=" bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen cursor-none">
      <div className="z-80">
        <Navbar />
      </div>

      <section className="ml-[10vw] mr-[4vw] z-10 my-3">
        <Trail />
        <Heading name={"ABOUT THE PROJECT"} />
        <section className="w-full h-full flex text-white text-2xl text-opacity-50 mt-3">
          <button
            className="w-1/3 h-[8vh] flex justify-center items-center bg-purple-600 bg-opacity-20 border-2 border-white border-opacity-20 rounded-tl-2xl focus:font-bold focus:border-opacity-40 focus:bg-opacity-30 hover:bg-opacity-25 focus:text-opacity-60"
            onClick={() => handleButtonClick("Project")}
          >
            <p>Project Description</p>
          </button>
          <button
            className="h-[8vh] w-1/3 flex justify-center items-center bg-purple-600 bg-opacity-20 border-2 border-white border-opacity-20 focus:font-bold focus:border-opacity-40 focus:bg-opacity-30 hover:bg-opacity-25  focus:text-opacity-60"
            onClick={() => handleButtonClick("System")}
          >
            <p>System Overview</p>
          </button>

          <button
            className="h-[8vh] w-1/3 flex justify-center items-center bg-purple-600 bg-opacity-20 border-2 border-white border-opacity-20 rounded-tr-2xl focus:font-bold focus:border-opacity-40 focus:bg-opacity-30 hover:bg-opacity-25 focus:text-opacity-60"
            onClick={() => handleButtonClick("Creators")}
          >
            <p> The Creators</p>
          </button>
        </section>
        <section className="border-2 border-white border-opacity-25 h-[70vh] rounded-b-2xl bg-purple-900 bg-opacity-10 ">
          <section className="flex">
            <div
              id="Default"
              className={`${activeButton === "Project" ? "hidden" : ""} ${
                activeButton === "System" ? "hidden" : ""
              } ${activeButton === "Creators" ? "hidden" : ""}`}
            >
              <ProjectDesc />
            </div>
            <div
              id="Project"
              className={`${activeButton === "Project" ? "" : "hidden"}`}
            >
              <ProjectDesc />
            </div>

            <div
              id="System"
              className={`${activeButton === "System" ? "" : "hidden"}`}
            >
              <System />
            </div>

            <div
              id="Creators"
              className={`${activeButton === "Creators" ? "" : "hidden"}`}
            >
              <Creators />
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default About;
