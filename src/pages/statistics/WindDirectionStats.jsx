import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import Display from "../../components/Display"
import { getCardinalDirection, useMostRecentDataFromFirebase, GetLowHighAveData, useWeeklyDataFromFirebase } from "../../components/database/DataDisplayHandler";

function WindDirectionStats() {

  const database = "Winddirection";
  const todayangle = useMostRecentDataFromFirebase(database);
  const todaydir = getCardinalDirection(todayangle)

  const weeklyangle = useWeeklyDataFromFirebase(database);
  const weeklyData = weeklyangle.map(entry => entry.value);
  const [ave, low, high] = GetLowHighAveData(weeklyData);
  const weeklydir = getCardinalDirection(ave);

  return (
    <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />

      <section className="ml-[10vw] mr-[8vw] z-10 my-3">
        <Heading type={1} name={"WIND DIRECTION"} />
      </section>
      
      <div className="ml-40 mt-4 flex items-center">
      <section className="flex flex-row gap-[5rem]">
      <Display
        type={8}
        name={"TODAY"}
        meas={todayangle}
        unit={"°"}
        direction={todaydir}
        className="z-0 relative"
      />

      <Display
        type={8}
        name={"WEEKLY"}
        meas={ave}
        unit={"°"}
        direction={weeklydir}
        className="z-0 relative"
        
      />
      </section>
      </div>
    </div>
  );
}


export default WindDirectionStats