import Heading from "../../components/Heading";
import LineGraph from "../../components/LineGraph";
import Navbar from "../../components/Navbar";

function WindSpeedStats() {
  return (
    <div className=" bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />
      <section className="ml-[10vw] mr-[8vw] z-10 my-3 gap-5 flex flex-col">
        <Heading type={1} name={"Wind Speed"} />
        <LineGraph />
      </section>
    </div>
  );
}

export default WindSpeedStats;
