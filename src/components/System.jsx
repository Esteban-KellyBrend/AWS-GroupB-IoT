import React from "react";

function System() {
  return (
    <div className=" transition-all duration-100">
      <section className="mt-3 text-xl text-white font-light text-justify flex flex-col gap-4 indent-10 text-opacity-80 w-full flex-wrap pl-3 pr-8">
        <p className='font-bold text-3xl indent-0'>SYSTEM OVERVIEW</p>
        <p>
          The Automatic Weather System meticulously crafted by a group of
          innovative Computer Engineering students from Adamson University
          showcases a sophisticated blend of cutting-edge components,
          exemplifying their prowess in the "Internet of Things" course. At the
          core of this weather-monitoring marvel is a robust assembly of
          hardware, including a potent Buck Converter ensuring efficient power
          management, linked seamlessly with a set of stranded Connecting Wires
          that form the neural network of the system. The integration of a DC
          Voltage and Current Sensor guarantees precise energy measurement,
          while the inclusion of a DHT22 sensor provides accurate temperature
          and humidity data. The incorporation of an MQ Carbon Monoxide Sensor
          emphasizes the system's commitment to environmental monitoring.
          Further enhancing its capabilities are a Rain Gauge employing both IR
          and Hall Effect technology, a Solar Panel for sustainable energy
          harvesting, and an intelligent Solar Panel Controller optimizing
          energy utilization. The meticulous inclusion of a JST Connector
          streamlines connectivity, while a SPST Switch offers manual control.
          To capture the essence of atmospheric dynamics, the system features a
          Wind Vane and Anemometer, completing the ensemble. This amalgamation
          of high-caliber components showcases the students' dedication to
          creating a comprehensive and efficient weather monitoring system for a
          connected world.
        </p>
      </section>
    </div>
  );
}

export default System;
