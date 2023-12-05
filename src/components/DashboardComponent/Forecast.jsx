import { Icon } from "@iconify/react";
import React from "react";

function Forecast() {
  const WForecast = [
    {
      iconn: "material-symbols:sunny-outline",
      Weather: "SUNNY",
      Time: "7:00",
    },
    {
      iconn: "material-symbols:sunny-outline",
      Weather: "SUNNY",
      Time: "7:30",
    },
    {
      iconn: "fontisto:day-cloudy",
      Weather: "PARTLY CLOUDY",
      Time: "8:00",
    },
    {
      iconn: "fluent-mdl2:cloudy",
      Weather: "CLOUDY",
      Time: "8:30",
    },
    {
      iconn: "fluent-mdl2:cloudy",
      Weather: "CLOUDY",
      Time: "9:00",
    },
    {
      iconn: "mingcute:cloud-windy-line",
      Weather: "WINDY",
      Time: "9:30",
    },
    {
      iconn: "carbon:rain",
      Weather: "RAINY",
      Time: "10:00",
    },
    {
      iconn: "raphael:thunder",
      Weather: "STORMY",
      Time: "10:30",
    },
  ];

  return (
    <div className="mt-2 mb-4 group">
      <p className="text-white flex text-xl text-opacity-70 pb-1 indent-3 group-hover:font-semibold">
        Weather Condition
      </p>
      <div className="w-full h-[22vh] rounded-2xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex flex-row justify-center items-center group-hover:border-2  group-hover:bg-purple-700 group-hover:bg-opacity-10 group-hover:border-purple-900 group-hover:font-semibold">
        <section className="flex justify-around gap-1 p-1">
          {WForecast.map((Weath, index) => (
            <div key={index} className="w-[10vw] h-full rounded-xl flex flex-col justify-center items-center p-1">
              <Icon
                icon={Weath.iconn}
                className="border-none text-white text-[4vw] bg-transparent mb-3"
              />
              <p className="text-sm text-white text-opacity-80">{Weath.Weather}</p>
              <p className="text-xs text-white text-opacity-60 -mt-1">{Weath.Time}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Forecast;
