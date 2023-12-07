import LineGraph from "../../components/LineGraph";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import Display from "../../components/Display";
import { formatDataKeys, GetLowHighAveData, useWeeklyDataFromFirebase, useTodayDataFromFirebase } from "../../components/database/DataDisplayHandler";
import { useAllDataFromFirebase } from "../../components/database/FirebaseHandler";

function SolarIrradianceStats() {

  const firebasefolder = "SolarIrradiance";

  const datahr = useTodayDataFromFirebase(firebasefolder);
  const datakey = datahr.map(entry => entry.key);
  const datavalue  = datahr.map(entry => entry.value);
  const filtereddatakey = formatDataKeys(datakey, "HHMM", "12hour");

  const datawk = useWeeklyDataFromFirebase(firebasefolder);
  const weeklyLabels = datawk.map(entry => entry.key);
  const weeklyData = datawk.map(entry => entry.value);

  const alldata = useAllDataFromFirebase(firebasefolder);
  const alldataval = alldata.map(entry => entry.value);

  const [averageValue, lowestValue, highestValue] = GetLowHighAveData(alldataval)

  return (
    <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />
      <section className="ml-[10vw] mr-[8vw] z-10 my-3">
        <Heading type={1} name={"Solar Irradiance"} />
      </section>

      <LineGraph data={datavalue} labels={filtereddatakey} name={"TODAY"} unit="W/m²" />
      <LineGraph data={weeklyData} labels={weeklyLabels} name={"THIS WEEK"} unit="W/m²" />

      <div className="flex flex-col items-center justify-center">
        <section className="flex flex-row gap-[10rem] mt-3 ">
          
          <Display type={1} name={"Highest"} meas={highestValue} unit={"W/m²"} />
          <Display type={1} name={"Lowest"} meas={lowestValue} unit={"W/m²"} />
          <Display type={1} name={"Average"} meas={averageValue} unit={"W/m²"} />
        </section>
      </div>

    </div>
  );
}

export default SolarIrradianceStats;