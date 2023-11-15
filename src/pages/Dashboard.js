import Display from "../components/Display";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className=" bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
        <Navbar />
      <section className="ml-[8vw]">
        <Heading type={1} name={"MAIN DASHBOARD"} />
        <Display type={1} name={"Solar Irradiance"} meas={34.8} unit={"°C"} />
        <Display type={1} name={"Humidity"} meas={42.6} unit={"%"} />
    
      </section>
    </div>
  );
}

export default Dashboard;
