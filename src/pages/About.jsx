import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Member from "../components/Member";

function About() {
  return (
    <div className=" bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />
      <section className="ml-[10vw] mr-[8vw] z-10 my-3">
        <Heading type={1} name={"ABOUT THE PROJECT"} />
        <section className="mt-6 text-xl text-white font-light text-justify flex flex-col gap-4 indent-10 text-opacity-80">
          <p>
            Computer engineering students at Adamson University, in their
            graduating year, are working on an advanced project as part of their
            "Internet of Things" course. The project involves the creation of an
            IoT-based Automatic Weather Station (AWS) designed for deployment in
            the northern region of Metro Manila. This AWS system aims to provide
            real-time data on key environmental parameters and facilitate
            comprehensive environmental monitoring.
          </p>
          <p>
          The Automatic Weather Station (AWS) is strategically located in the northern part of Metro Manila to provide accurate and localized weather data for this specific area. This data is crucial for various applications, including urban planning, disaster preparedness, and agriculture in the northern region.
          </p>
          <section
            id="container"
            className="flex flex-row w-full gap-12 mt-8 border border-purple-500 justify-center items-center rounded-xl"
          >
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
