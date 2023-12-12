import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherButton = ({ cities, setCity }) => {
  console.log(`cities: `, cities);
  return (
    <div>
      <Button variant="warning">Current Location</Button>
      {cities.map((it) => (
        <Button onClick={() => setCity(it)} variant="warning">
          {it}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
