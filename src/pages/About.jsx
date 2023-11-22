import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Member from "../components/Member";

function About() {
  return (
    <div className=" bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />
      <section className="ml-[10vw] mr-[4vw] z-10 my-3">
        <Heading type={1} name={"ABOUT THE PROJECT"} />
        <section>
        <section id="container" className="flex flex-row w-full gap-12 mt-24 border border-purple-500 justify-center items-center rounded-xl">
          <Member />
          <Member />
          <Member />
          <Member />
          </section>
        </section>
      </section>
    </div>
  );
}

export default About;
