import Display from "../components/Display";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className=" bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
        <Navbar />
      <section className="ml-[8vw]">
        <Heading type={1} name={"MAIN DASHBOARD"} />
        <Display type={1} name={"Solar Irradiance"} meas={34.8} unit={"W/m²"}/>
        {/* <Display type={1} name={"Humidity"} meas={42.6} unit={"%"}/>
        <Display type={1} name={"Precipitation"} meas={96.2} unit={"%"}/>
        <Display type={1} name={"CO Value"} meas={210} unit={"ppm"}/>
        <Display type={1} name={"Heat Index"} meas={37.2} unit={"°C"}/> */}
        {/* <Display type={2} loc={"Somewhere, Philippines"} date={"nov17"}time={"09:33"}/> */}
        {/* <Display type={3} name={"Wind Direction"} direction={"48° East of North"}/> */}
        <Display type={4} name={"Temperature"} direction={"48° East of North"}/>
    
      </section>
    </div>
  );
}

export default Dashboard;
