/* eslint-disable react/prop-types */
import { GrWaypoint } from "react-icons/gr";
import { IoMdClock } from "react-icons/io";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import DetailsOnMap from "../components/DetailsOnMap.jsx";
import { FaMapMarkerAlt } from "react-icons/fa";
import clear from "../Images/Weather/clear.png";
import clouds from "../Images/Weather/clouds.png";
import drizzle from "../Images/Weather/drizzle.png";
import rain from "../Images/Weather/rain.png";
import snow from "../Images/Weather/snow.png";

function RoadInfo({ distance, duration, weatherData, error }) {
  console.log(weatherData);
  function timer() {
    const saat = Math.floor(duration / 60); // Tam sayı kısmı saat olarak al
    const dakikaKalan = Math.round(duration % 60); // Kalan kısmı dakika olarak al ve yuvarla
    return `${saat} saat ${dakikaKalan} dakika`;
  }

  // Hava durumu ikonunu almak için bir fonksiyon
  function getWeatherIcon(icon) {
    switch (icon) {
      case "Clear":
        return clear;
      case "Clouds":
        return clouds;
      case "Drizzle":
        return drizzle;
      case "Rain":
        return rain;
      case "Snow":
        return snow;

      default:
        return null;
    }
  }

  return (
    <div className="w-full h-max flex flex-wrap px-2 gap-2 mt-2 items-center justify-center">
      <div className="w-max h-max p-5 bg-slate-800 rounded-sm">
        <p className="text-2xl text-gray-400 flex items-center justify-center gap-2">
          Məsafə{" "}
          <span>
            <GrWaypoint />
          </span>
        </p>
        <p className="text-slate-100">
          {distance ? distance : 0} <span className="font-semibold">km</span>
        </p>
      </div>
      <div className="w-max h-max p-5 bg-slate-800">
        <p className="text-2xl text-gray-400 flex items-center justify-center gap-2">
          Səyahət müddəti:
          <span>
            <IoMdClock />
          </span>
        </p>
        <p className="font-semibold text-slate-100">{timer()}</p>
      </div>
      <div className="w-max h-max p-5 bg-slate-800">
        <p className="text-2xl text-gray-400 flex items-center justify-center gap-2">
          Hava proqnozu:{" "}
          <span>
            <TiWeatherWindyCloudy />
          </span>
        </p>
        {error ? (
          <p className="text-red-500">Hava durumu bilgisine ulaşılamıyor.</p>
        ) : (
          weatherData && (
            <div className="w-full h-max flex flex-col items-center justify-center">
              <div className="w-auto h-auto flex gap-2 items-center justify-center">
                <p className="text-3xl font-semibold text-emerald-50">
                  {weatherData.main.temp} °C
                </p>
                {/* Hava durumu görselini API'den aldığınız şekilde gösterebilirsiniz */}
                <img
                  src={getWeatherIcon(weatherData.weather[0].main)}
                  className="w-[6rem] h-auto"
                  alt="weather"
                />
              </div>
              <p className="font-semibold text-md text-slate-100">
                {weatherData.weather[0].description}
              </p>
            </div>
          )
        )}
      </div>
      <div className="w-max h-max p-5 bg-slate-800 flex flex-col items-center justify-center gap-2">
        <p className="text-2xl text-gray-400 flex items-center justify-center gap-2">
          Xəritədə göstər{" "}
          <span>
            <FaMapMarkerAlt />
          </span>
        </p>
        <DetailsOnMap />
      </div>
    </div>
  );
}

export default RoadInfo;
