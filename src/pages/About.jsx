import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Creators from "../components/Creators";
import ProjectDesc from "../components/ProjectDesc";
import System from "../components/System";

function About() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className=" bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <div className="z-80">
      <Navbar />
      </div>
      <section className="ml-[10vw] mr-[4vw] absolute my-3">
        <Heading name={"ABOUT THE PROJECT"} />
        <div className="w-[34.6vw] h-[8vh] -rotate-90 left-0 top-0 -ml-[5.5vw] mt-[53.7vh] absolute text-white text-sm text-opacity-40">
          <button
            className="w-1/3 h-full bg-purple-600 bg-opacity-20 border-2 border-white border-opacity-20 rounded-tl-2xl focus:font-bold focus:border-opacity-40 focus:bg-opacity-30 hover:bg-opacity-25 focus:text-opacity-60"
            onClick={() => handleButtonClick("Creators")}
          >
            The Creators
          </button>

          <button
            className="w-1/3 h-full bg-purple-600 bg-opacity-20 border-2 border-white border-opacity-20 focus:font-bold focus:border-opacity-40 focus:bg-opacity-30 hover:bg-opacity-25 focus:text-opacity-60"
            onClick={() => handleButtonClick("System")}
          >
            System Overview
          </button>

          <button
            className="w-1/3 h-full bg-purple-600 bg-opacity-20 border-2 border-white border-opacity-20 rounded-tr-2xl focus:font-bold focus:border-opacity-40 focus:bg-opacity-30 hover:bg-opacity-25 focus:text-opacity-60"
            onClick={() => handleButtonClick("Project")}
          >
            Project Description
          </button>
        </div>

        <section className="border-2 border-white border-opacity-25 pt-5 px-4 h-[78vh] ml-12 mt-5 rounded-r-2xl bg-purple-900 bg-opacity-10">
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

          <div id="Creators" className={`${activeButton === "Creators" ? "" : "hidden"}`}>
            <Creators />
          </div>

        </section>
      </section>
    </div>
  );
}

export default About;
