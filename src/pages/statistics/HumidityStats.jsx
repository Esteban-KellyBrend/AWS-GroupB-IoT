import LineGraph from "../../components/LineGraph";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import Display from "../../components/Display";
import { formatDataKeys, GetLowHighAveData, useWeeklyDataFromFirebase } from "../../components/database/DataDisplayHandler";
import { useAllDataFromFirebase } from "../../components/database/FirebaseHandler";

function HumidityStats() {

  const firebasefolder = "DHT22/Humidity";

  const datahr = useAllDataFromFirebase(firebasefolder);
  const datakey = datahr.map(entry => entry.key);
  const datavalue  = datahr.map(entry => entry.value);
  const filtereddatakey = formatDataKeys(datakey, "HHMM", "12hour");

  const datawk = useWeeklyDataFromFirebase(firebasefolder);
  const weeklyLabels = datawk.map(entry => entry.key);
  const weeklyData = datawk.map(entry => entry.value);

  const [averageValue, lowestValue, highestValue] = GetLowHighAveData(datavalue)

  return (
    <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />
      <section className="ml-[10vw] mr-[8vw] z-10 my-3">
        <Heading type={1} name={"HUMIDITY"} />
      </section>

      <LineGraph data={datavalue} labels={filtereddatakey} name={"HOURLY"} unit="%" dataLimit={14} />
      <LineGraph data={weeklyData} labels={weeklyLabels} name={"WEEKLY"} unit="%" dataLimit={7} />

      <div className="flex flex-col items-center justify-center">
        <section className="flex flex-row gap-[10rem] mt-3 ">
          
          <Display type={1} name={"Highest"} meas={highestValue} unit={"%"} />
          <Display type={1} name={"Lowest"} meas={lowestValue} unit={"%"} />
          <Display type={1} name={"Average"} meas={averageValue} unit={"%"} />
        </section>
      </div>

    </div>
  );
}

export default HumidityStats;