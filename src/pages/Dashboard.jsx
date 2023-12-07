import { Link } from "react-router-dom";
import Display from "../components/Display";
import Forecast from "../components/DashboardComponent/Forecast";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Temperature from "../components/DashboardComponent/Temperature";
import Time from "../components/DashboardComponent/Time";
import { useMostRecentDataFromFirebase, getCardinalDirection } from "../components/database/DataDisplayHandler";

function Dashboard() {

  const windspeed_data = useMostRecentDataFromFirebase("Wind Speed Sensor");
  const humidity_data = useMostRecentDataFromFirebase("DHT22/Humidity");
  const COValue_data = useMostRecentDataFromFirebase("MQ-7 Sensor");
  const Precipitation_data = useMostRecentDataFromFirebase("Rainfall");
  const HeatIndex_data = useMostRecentDataFromFirebase("HeatIndex");
  const Temperature_data = useMostRecentDataFromFirebase("DHT22/Temperature");
  const SolarIrradiance_data = useMostRecentDataFromFirebase("Irradiance Sensor");
  const WindDirection_data = useMostRecentDataFromFirebase("Winddirection");
  const WindDirection = getCardinalDirection(WindDirection_data);

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
              meas={SolarIrradiance_data}
              unit={"W/m²"}
            />
            </Link>
              <Link to={"/PrecipitationStats"}>
            <Display type={1} name={"Precipitation"} meas={Precipitation_data} unit={"%"} />
            </Link>
          </section>

          <section className="flex flex-col gap-2">
            <Link to={"/TemperatureStats"}>
          <Temperature meas={Temperature_data} />
          </Link>

            <section className="flex flex-row gap-[5rem]">
            <Link to={"/HumidityStats"}>
              <Display type={1} name={"Humidity"} meas={humidity_data} unit={"%"} />
              </Link>
              <Link to={"/HeatIndexStats"}>
              <Display type={1} name={"Heat Index"} meas={HeatIndex_data} unit={"°C"} />
              </Link>
              
            </section>
            <section className="flex flex-row gap-[5rem]">
            <Link to={"/COValueStats"}>
              <Display type={1} name={"CO Value"} meas={COValue_data} unit={"ppm"} />
              </Link>

              <Link to={"/WindSpeedStats"}>
              <Display type={1} name={"Wind Speed"} meas={windspeed_data} unit={"kph"} />
              </Link>
              
            </section>
          </section>
              <Link to={"/WindDirectionStats"}>
          <Display
            type={3}
            name={"Wind Direction"}
            meas={WindDirection_data}
            unit={"°"}
            direction={WindDirection}
            className="z-0 relative"
          />
          </Link>
        </section>
      </section>
    </div>
  );
}

export default Dashboard;
