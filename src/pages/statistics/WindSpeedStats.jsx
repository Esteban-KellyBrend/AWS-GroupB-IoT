import React from "react";
import LineGraph from "../../components/LineGraph";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import Display from "../../components/Display";

 /*
   *
   * HOURLY: 17 DATA POINTS
   * WEEKLY: 7 DATA POINTS
   * 
   * by: Bins
   * 
   */


const hourlyData = [8, 9, 7, 12.5, 12, 13, 5, 1, 3, 14, 2, 6, 8, 12, 6.5, 1, 6.6];
const hourlyLabels = ["6:30", "7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30"];

const weeklyData = [10, 9, 7, 13, 1, 8, 16];
const weeklyLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function WindSpeedStats() {

  return (
    <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />
      <section className="ml-[10vw] mr-[8vw] z-10 my-3">
        <Heading type={1} name={"WIND SPEED"} />
      </section>

      <LineGraph data={hourlyData} labels={hourlyLabels} name={"TODAY"} />
      <LineGraph data={weeklyData} labels={weeklyLabels} name={"THIS WEEK"} />

      <div className="flex flex-col items-center justify-center">
        <section className="flex flex-row gap-[10rem] mt-3 ">
          
          <Display type={1} name={"Highest"} meas={"12.5"} unit={"kph"} />
          <Display type={1} name={"Lowest"} meas={"1"} unit={"kph"} />
          <Display type={1} name={"Average"} meas={"6.9"} unit={"kph"} />
        </section>
      </div>

    </div>
  );
}

export default WindSpeedStats;