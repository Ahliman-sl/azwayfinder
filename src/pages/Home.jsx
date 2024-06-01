import { useEffect, useRef, useContext } from "react";
import Map from "../components/Map";
import SearchBar from "../components/SearchBar.jsx";
import SelectOption from "../components/SelectOption.jsx";
import DatePicker from "../components/DatePicker.jsx";
import LogoTitle from "../components/LogoTitle.jsx";
import RoadInfo from "../components/RoadInfo.jsx";
import { geocodeCity } from "../components/geocodeCity.jsx";
import useGetWeather from "../components/getWeather.jsx";
import { AppContext } from "../../context/AppContext.jsx";

function Home() {
  const {
    startCity,
    setStartCity,
    endCity,
    setEndCity,
    startCoordinates,
    setStartCoordinates,
    endCoordinates,
    setEndCoordinates,
    distance,
    setDistance,
    duration,
    setDuration,
    selectedDate,
    setSelectedDate,
  } = useContext(AppContext);
  const mapRef = useRef(null);

  // hook-dan datani aliriq
  const { weatherData, error } = useGetWeather(endCity, selectedDate);

  useEffect(() => {
    if (startCity) {
      geocodeCity(startCity)
        .then((coords) => setStartCoordinates(coords))
        .catch((err) => console.error(err));
    }
  }, [startCity, setStartCoordinates]);

  useEffect(() => {
    if (endCity) {
      geocodeCity(endCity)
        .then((coords) => setEndCoordinates(coords))
        .catch((err) => console.error(err));
    }
  }, [endCity, setEndCoordinates]);

  useEffect(() => {
    if (distance !== null && mapRef.current !== null) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [distance]);

  const handleRouteCalculated = (calculatedDistance, calculatedDuration) => {
    setDistance(calculatedDistance);
    setDuration(calculatedDuration);
  };

  const handleSelectCity = (city) => {
    if (!startCity) {
      setStartCity(city);
    } else {
      setEndCity(city);
    }
  };

  return (
    <section>
      <div className="container px-4 w-[98%] h-full mx-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 sm:col-span-12 bg-slate-900 flex flex-col pb-5">
            <LogoTitle />
            <div className="w-full h-max">
              <SearchBar onSelectCity={handleSelectCity} />
            </div>
            <div className="w-full h-max flex flex-row sm:flex-row items-center gap-2 justify-around ">
              <SelectOption
                value={startCity}
                onChange={(e) => setStartCity(e.target.value)}
              />
              <SelectOption
                value={endCity}
                onChange={(e) => setEndCity(e.target.value)}
              />
            </div>
            <div className="w-full h-max flex items-center justify-center">
              <div className="w-max h-max flex flex-col justify-center text-slate-200 font-semibold">
                <p className="text-md text-center">Səyahət vaxtı :</p>
                <DatePicker
                  setSelectedDate={setSelectedDate}
                  selectedDate={selectedDate}
                />
              </div>
            </div>
            {/* WeatherData prop'unu RoadInfo bileşenine ekledik */}
            <RoadInfo
              distance={distance}
              duration={duration}
              weatherData={weatherData}
              error={error}
            />
          </div>

          <div
            ref={mapRef}
            className="col-span-4 sm:col-span-12 w-full h-[40rem] mb-5 bg-orange-500"
          >
            <Map
              startCoordinates={startCoordinates}
              endCoordinates={endCoordinates}
              startCity={startCity}
              endCity={endCity}
              onRouteCalculated={handleRouteCalculated}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
