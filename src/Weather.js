import "./styles.css";

export default function Weather() {
  let weatherData = {
    pressure: 1021,
    humidity: 30,
    wind: 7,
    temperature: 15,
    imgUrl: "http://openweathermap.org/img/wn/50d@2x.png"
  };
  return (
    <div className="row">
      <div className="col-3">
        <img className="img" src={weatherData.imgUrl} width="100" alt="icon" />
      </div>
      <div className="col-4">
        <span className="temperature">{weatherData.temperature}</span>
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
              {weatherData.pressure}
              <span> Pa</span>
            </li>
            <li>
              <span> Humidity: </span>
              {weatherData.humidity}
              <span>%</span>
            </li>
            <li>
              <span> Wind: </span>
              {weatherData.wind}
              <span> Km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
