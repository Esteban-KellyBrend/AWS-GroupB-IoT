import LineGraph from "../../components/LineGraph";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import Display from "../../components/Display";
import * as FirebaseHandler from '../../components/database/FirebaseHandler';

 /*
   *
   * HOURLY: 17 DATA POINTS
   * WEEKLY: 7 DATAs POINTS
   * 
   * by: Bins
   * 
   */


const weeklyData = [10, 9, 7, 13, 1, 8, 16];
const weeklyLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function WindSpeedStats() {

  const LowestSpeed = FirebaseHandler.GetDataStatistics('averageWindSpeed','lowest')
  const AverageSpeed = FirebaseHandler.GetDataStatistics('averageWindSpeed','average')
  const HighestSpeed = FirebaseHandler.GetDataStatistics('averageWindSpeed','highest')
  const hourlyData = FirebaseHandler.GetRealTimeDatas('averageWindSpeed');
  const hourlyLabels = hourlyData.map(entry => entry.key);
  const hourlyValues = hourlyData.map(entry => entry.data);  

  return (
    <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />
      <section className="ml-[10vw] mr-[8vw] z-10 my-3">
        <Heading type={1} name={"WIND SPEED"} />
      </section>

      <LineGraph data={hourlyValues} labels={hourlyLabels} name={"TODAY"} />
      <LineGraph data={weeklyData} labels={weeklyLabels} name={"THIS WEEK"} />

      <div className="flex flex-col items-center justify-center">
        <section className="flex flex-row gap-[10rem] mt-3 ">
          
          <Display type={1} name={"Highest"} meas={HighestSpeed} unit={"kph"} />
          <Display type={1} name={"Lowest"} meas={LowestSpeed} unit={"kph"} />
          <Display type={1} name={"Average"} meas={AverageSpeed} unit={"kph"} />
        </section>
      </div>

    </div>
  );
}

export default WindSpeedStats;