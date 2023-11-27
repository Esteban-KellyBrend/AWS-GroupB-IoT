import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import LineGraph from "../../components/LineGraph";

function TemperatureStats() {
  return (
    <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />

      <section className="ml-[10vw] mr-[8vw] z-10 my-3">
        <Heading type={1} name={"TEMPERATURE"} />
      </section>
    </div>


  );
}

export default TemperatureStats;