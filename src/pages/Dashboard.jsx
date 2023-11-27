import { Link } from "react-router-dom";
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
              <Link to={"/SolarIrradianceStats"}>
            <Display
              type={1}
              name={"Solar Irradiance"}
              meas={34.8}
              unit={"W/m²"}
            />
            </Link>
              <Link to={"/PrecipitationStats"}>
            <Display type={1} name={"Precipitation"} meas={"96"} unit={"%"} />
            </Link>
          </section>

          <section className="flex flex-col gap-2">
            <Link to={"/TemperatureStats"}>
          <Temperature meas={69.2} />
          </Link>

            <section className="flex flex-row gap-[5rem]">
            <Link to={"/HumidityStats"}>
              <Display type={1} name={"Humidity"} meas={42.6} unit={"%"} />
              </Link>
              <Link to={"/HeatIndexStats"}>
              <Display type={1} name={"Heat Index"} meas={37.2} unit={"°C"} />
              </Link>
              
            </section>
            <section className="flex flex-row gap-[5rem]">
            <Link to={"/COValueStats"}>
              <Display type={1} name={"CO Value"} meas={210} unit={"ppm"} />
              </Link>

              <Link to={"/WindSpeedStats"}>
              <Display type={1} name={"Wind Speed"} meas={420} unit={"kph"} />
              </Link>
              
            </section>
          </section>
              <Link to={"/WindDirectionStats"}>
          <Display
            type={3}
            name={"Wind Direction"}
            meas={"48"}
            unit={"°"}
            direction={" East of North"}
            className="z-0 relative"
          />
          </Link>
        </section>
      </section>
    </div>
  );
}

export default Dashboard;
