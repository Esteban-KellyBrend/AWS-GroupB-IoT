import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Display from "../components/Display";
import LineGraph from "../components/LineGraph";

function HWSettings() {
    return (     
      <div className=" bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
        <Navbar />
        <section className="ml-[10vw] mr-[8vw] z-10 my-3">
        <Heading type={1} name={"HARDWARE STATUS CONNECTIVITY"} />
        <section className="mt-5 mb-4 flex gap-[4.5rem]">
          <section className="flex flex-row">
          <Display type={6} name={"99"} unit={"%"} active={"Estimated Time Remaining"} time={"8hrs 30mins"}/>
          </section>
        <div className="flex flex-col">
          <Display type={7} name={"Voltage"} meas={"125"} unit={"V"}/>
          <Display type={7} name={"Current"} meas={"213"} unit={"A"}/>
        </div>
        </section>
        <section className="mb-2 flex flex-row gap-[12rem]">
          <Display type={5} name={"MQ CO Sensor"} active={"Active for"} time={"5hrs 24mins"} />
          <Display type={5} name={"DHT 22"} active={"Active for"} time={"3day ago"}/>
          <Display type={5} name={"Rain Gauge"} active={"Active for"} time={"1hr 2mins"}/>
        </section>
        <section className="mb-2 flex flex-row gap-[12rem]">
          <Display type={5} name={"Anenometer"} active={"Active for"} time={"6hrs 47mins"}/>
          <Display type={5} name={"Solar Panel"} active={"Active for"} time={"1day ago"}/>
          <Display type={5} name={"Current Sensor"} active={"Active for"} time={"0days ago"}/>
        </section>
        <section className="flex flex-row gap-[12rem]">
          <Display type={5} name={"Wind Vane"} active={"Active for"} time={"3hrs ago"}/>
          <Display type={5} name={"Solar Charger"} active={"Active for"} time={"2days 3hrs"}/>
          <Display type={5} name={"Votlage Sensor"} active={"Active for"} time={"0days ago"}/>
        </section>
      </section>
    </div>
  );
}
export default HWSettings;