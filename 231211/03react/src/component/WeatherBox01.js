import React from "react";

const WeatherBox = ({ weather }) => {
  console.log(`weather`, weather);
  const temperatureC = weather && weather.main ? weather.main.temp : "";
  // const currentWeahter = weather && weather.weather[0]?.description;
  return (
    <div className="weather-box">
      <h2>도시: {weather?.name}</h2>
      <h2>온도: {temperatureC}도</h2>
      <h3>현재날씨: {weather && weather.weather[0]?.description}</h3>
    </div>
  );
};

export default WeatherBox;
