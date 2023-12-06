import LineGraph from "../../components/LineGraph";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import Display from "../../components/Display";
import { useAllDataFromFirebase, useLimitedDataFromFirebase } from "../../components/database/FirebaseHandler";
import { formatDataKeys, GetLowHighAveData } from "../../components/database/DataDisplayHandler";
import Trail from "../../components/Trail";

 /*
   *
   * HOURLY: 17 DATA POINTS
   * WEEKLY: 7 DATAs POINTS
   * 
   * by: Bins
   * 
   */


const hourlyValues = [10, 9, 7, 13, 1, 8, 16];
const weeklyData = [10, 9, 7, 13, 1, 8, 16];
const weeklyLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const hourlyLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function WindSpeedStats() {

  const data = useLimitedDataFromFirebase("averageWindSpeed", 17);
  const datakey = data.map(entry => entry.key);
  const datavalue  = data.map(entry => entry.value);
  const filtereddatakey = formatDataKeys(datakey);

  const [averageValue, lowestValue, highestValue] = GetLowHighAveData(datavalue)

  return (
    <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />
      <section className="ml-[10vw] mr-[8vw] z-10 my-3">
        <Trail />
        <Heading type={1} name={"WIND SPEED"} />
      </section>

      <LineGraph data={datavalue} labels={filtereddatakey} name={"TODAY"} />
      <LineGraph data={weeklyData} labels={weeklyLabels} name={"THIS WEEK"} />

      <div className="flex flex-col items-center justify-center">
        <section className="flex flex-row gap-[10rem] mt-3 ">
          
          <Display type={1} name={"Highest"} meas={highestValue} unit={"kph"} />
          <Display type={1} name={"Lowest"} meas={lowestValue} unit={"kph"} />
          <Display type={1} name={"Average"} meas={averageValue} unit={"kph"} />
        </section>
      </div>

    </div>
  );
}

export default WindSpeedStats;