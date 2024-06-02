import { useEffect, useState } from "react";
const apiKey = "141d767b1238a104d605da18b8197011";

function useGetWeather(city, date) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city || !date) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeatherData(data);
        } else {
          setError(data.message);
        }
      })
      .catch((err) => setError(err.message));
  }, [city, date]);

  return { weatherData, error };
}

export default useGetWeather;
