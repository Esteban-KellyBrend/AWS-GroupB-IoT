import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import Display from "../../components/Display"
import Trail from "../../components/Trail";
import { getCardinalDirection } from "../../components/database/DataDisplayHandler";

function WindDirectionStats() {

  const todayangle = 45;
  const todaydir = getCardinalDirection(todayangle)

  const weeklyangle = 124;
  const weeklydir = getCardinalDirection(weeklyangle)

  return (
    <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />

      <section className="ml-[10vw] mr-[8vw] z-10 my-3">
        <Trail />
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
        name={"THIS WEEK"}
        meas={weeklyangle}
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