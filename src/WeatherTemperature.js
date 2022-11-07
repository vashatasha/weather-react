import React, {useState} from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState('celsius');
function convertToFahrenheit(event) {
 event.preventDefault(); 
 setUnit("fahrenheit")  
}
function convertToCelsius(event) {
    event.preventDefault(); 
    setUnit("celsius") 
}
function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
}
if (unit === "celsius") {
return (
    <div className="WeatherTemperature">
    <span className="temperature">{Math.round(props.celsius)}</span>
      <span>
        <a className="celsius" href="/">ºC|</a>
        <a className="fahrenheit" href="/" onClick={convertToFahrenheit}>F</a>
      </span> 
    </div>
);
}else{
    return (
        <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
          <span>
            <a className="celsius" href="/" onClick={convertToCelsius}>ºC|</a>
            <a className="fahrenheit" href="/" >F</a>
          </span> 
        </div>
    );;
}
}