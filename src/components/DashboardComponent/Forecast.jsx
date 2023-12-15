import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Forecast() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const apiKey = '1d77e1c9f35b4b75583c841d9bce896e';
    const city = 'CALOOCAN'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        const forecastData = response.data.list;

        const formattedData = forecastData.slice(0, 8).map(item => ({
          iconn: getWeatherIcon(item.weather[0].main),
          Weather: item.weather[0].main,
          Time: formatTime(item.dt_txt),
        }));

        setWeatherData(formattedData);
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  const getWeatherIcon = (weather) => {
    switch (weather) {
      case 'Clear':
        return "material-symbols:sunny-outline";
      case 'Clouds':
        return "fluent-mdl2:cloudy";
      case 'Partly Cloudy':
        return "fontisto:day-cloudy";
      case 'Windy':
        return "mingcute:cloud-windy-line";
      case 'Rainy':
        return "carbon:rain";
      case 'Stormy':
        return "raphael:thunder";
      default:
        return "default-icon";
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  return (
    <div className="mt-2 mb-4 group">
      <p className="text-white flex text-xl text-opacity-70 pb-1 indent-3 group-hover:font-semibold">
        Weather Condition
      </p>
      <div className="w-full h-[22vh] rounded-2xl border border-white border-opacity-30 bg-[#4D4D4D] bg-opacity-10 flex flex-row justify-center items-center group-hover:border-2  group-hover:bg-purple-700 group-hover:bg-opacity-10 group-hover:border-purple-900 group-hover:font-semibold">
        <section className="flex justify-around gap-1 p-1">
          {weatherData.map((Weath, index) => (
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