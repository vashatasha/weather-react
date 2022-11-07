import "./styles.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props) {
  
  const [weather, setWeather] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    // setLoaded(true);
    setWeather({
      ready: true,
      location: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].main,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search ();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

    function search () {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  let form = (
    <form className="form" onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
      <input type="submit" value="Current location" />
    </form>
  );

  if (weather.ready) {
    return (
      <div className="container">
        {form}
        <h1>{weather.location}</h1>
        <div className="date"><Date /></div>
        <div className="description">{weather.description}</div>
    <div className="row">
    <div className="weatherIcon col-2">
    <WeatherIcon code={weather.icon} size={80} />
       </div>
     
    <div className="col-4">
    <WeatherTemperature celsius={weather.temperature}/>
      
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
      search();
    return "Loading...";
  }
}
