import "./styles.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Date from "./Date";
import Kharkiv from "./Kharkiv";
import Sky from "./Sky";
import Weather from "./Weather";


export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      location: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${
        response.data.weather[0].icon
      }@2x.png`,
      description: response.data.weather[0].main
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="form" onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
      <input type="submit" value="Current location" />
    </form>
  );

  if (loaded) {
    return (
      <div className="container">
        {form}
        <h1>{weather.location}</h1>
        <div className="date"><Date /></div>
        <div className="description">{weather.description}</div>
    <div className="row">
    <div className="col-3">
    <img className="img" src={weather.icon} alt={weather.description} />
    </div>
    <div className="col-4">
      <span className="temperature">{Math.round(weather.temperature)}</span>
      <span>
        <a href="/">ºC | </a>
        <a href="/">F</a>
      </span>
    </div>
    <div className="col-5">
      <div className="other">
        <ul>
          <li>
            <span> Pressure: </span>
            {weather.pressure}
            <span> Pa</span>
          </li>
          <li>
            <span> Humidity: </span>
            {weather.humidity}
            <span>%</span>
          </li>
          <li>
            <span> Wind: </span>
            {weather.wind}
            <span> Km/h</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  
);

  } else {
    return( 
     <div className="container">{form}
<Kharkiv />
<Sky />
<Weather />
</div>
    )
  }
}
