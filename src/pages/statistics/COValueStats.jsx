import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import LineGraph from "../../components/LineGraph";
import Trail from "../../components/Trail";

function COValueStats() {
  return (
    <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />

      <section className="ml-[10vw] mr-[8vw] z-10 my-3">
        <Trail />
        <Heading type={1} name={"CO Value"} />
      </section>
    </div>
    

  );
}

export default COValueStats;