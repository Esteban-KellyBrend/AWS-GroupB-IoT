import LineGraph from "../../components/LineGraph";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import Display from "../../components/Display";
import { formatDataKeys, GetLowHighAveData, useWeeklyDataFromFirebase, useTodayDataFromFirebase } from "../../components/database/DataDisplayHandler";

function COValueStats() {

  const datahr = useTodayDataFromFirebase("COValue");
  const datakey = datahr.map(entry => entry.key);
  const datavalue  = datahr.map(entry => entry.value);
  const filtereddatakey = formatDataKeys(datakey, "HHMM", "12hour");

  const datawk = useWeeklyDataFromFirebase("COValue");
  const weeklyLabels = datawk.map(entry => entry.key);
  const weeklyData = datawk.map(entry => entry.value);

  const [averageValue, lowestValue, highestValue] = GetLowHighAveData(datavalue)

  return (
    <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />
      <section className="ml-[10vw] mr-[8vw] z-10 my-3">
        <Heading type={1} name={"WIND SPEED"} />
      </section>

      <LineGraph data={datavalue} labels={filtereddatakey} name={"TODAY"} unit="ppm" />
      <LineGraph data={weeklyData} labels={weeklyLabels} name={"THIS WEEK"} unit="ppm" />

      <div className="flex flex-col items-center justify-center">
        <section className="flex flex-row gap-[10rem] mt-3 ">
          
          <Display type={1} name={"Highest"} meas={highestValue} unit={"ppm"} />
          <Display type={1} name={"Lowest"} meas={lowestValue} unit={"ppm"} />
          <Display type={1} name={"Average"} meas={averageValue} unit={"ppm"} />
        </section>
      </div>

    </div>
  );
}

export default COValueStats;