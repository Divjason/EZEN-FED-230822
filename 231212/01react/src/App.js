import "./App.css";
import { ClipLoader } from "react-spinners";
import { useState, useEffect } from "react";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [weather, setWeather] = useState(undefined);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
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
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(`data`, data);
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
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
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  const handleCityChange = (city) => {
    if (city === "current") {
      setWeather(getCurrentLocation());
    } else {
      setCity(city);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#f88c6b" size={150} loading={loading} />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            handleCityChange={handleCityChange}
            cities={cities}
            setCity={setCity}
          />
        </div>
      )}
    </div>
  );
}

export default App;
