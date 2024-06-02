/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import useGetWeather from "../src/components/getWeather.jsx";

const AppContext = createContext();

function AppProvider({ children }) {
  const [startCity, setStartCity] = useState("");
  const [endCity, setEndCity] = useState("");
  const [startCoordinates, setStartCoordinates] = useState(null);
  const [endCoordinates, setEndCoordinates] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { weatherData, error } = useGetWeather(endCity, selectedDate);

  return (
    <AppContext.Provider
      value={{
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
        weatherData,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
