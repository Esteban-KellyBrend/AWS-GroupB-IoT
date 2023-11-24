import Display from "../components/Display";
import Forecast from "../components/Forecast";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Temperature from "../components/Temperature";
import Time from "../components/Time";

function Dashboard() {
  return (
    <div className=" bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />
      <section className="ml-[10vw] mr-[4vw] z-10 my-3">
        <Heading type={1} name={"MAIN DASHBOARD"} />

        <Forecast />
        <section className="flex flex-row gap-[5rem]">
          <section className="flex flex-col gap-2">
            <Time />
            <Display
              type={1}
              name={"Solar Irradiance"}
              meas={34.8}
              unit={"W/m²"}
            />
            <Display type={1} name={"Precipitation"} meas={"96"} unit={"%"} />
          </section>

          <section className="flex flex-col gap-2">
          <Temperature meas={69.2} />

            <section className="flex flex-row gap-[5rem]">
              <Display type={1} name={"Humidity"} meas={42.6} unit={"%"} />
              <Display type={1} name={"Heat Index"} meas={37.2} unit={"°C"} />
            </section>
            <section className="flex flex-row gap-[5rem]">
              <Display type={1} name={"CO Value"} meas={210} unit={"ppm"} />
              <Display type={1} name={"Wind Speed"} meas={420} unit={"kph"} />
            </section>
          </section>
          <Display
            type={3}
            name={"Wind Direction"}
            meas={"48"}
            unit={"°"}
            direction={" East of North"}
            className="z-0 relative"
          />
        </section>
      </section>
    </div>
  );
}

export default Dashboard;
