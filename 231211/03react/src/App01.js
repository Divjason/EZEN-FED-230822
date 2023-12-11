import "./App.css";
import { useState, useEffect } from "react";
// import WeatherBox from "./component/WeatherBox";
// import WeatherButton from "./component/WeatherButton";
import WeatherBox01 from "./component/WeatherBox01";
import WeatherButton01 from "./component/WeatherButton01";

function App() {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [apiError, setAPIError] = useState("");
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      // console.log(`현재위치: ${lat}, ${lon}`);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=63f74653bc784125c8b0dea992eb3d70&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(`data`, data);
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=63f74653bc784125c8b0dea992eb3d70&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  useEffect(() => {
    if (city === "") {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  return (
    <>
      {loading ? (
        <div>wait...</div>
      ) : !apiError ? (
        <div className="container">
          <WeatherBox01 weather={weather} />
          <WeatherButton01 cities={cities} setCity={setCity} />
        </div>
      ) : (
        apiError
      )}
    </>
  );
}

export default App;
