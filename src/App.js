import React from "react";
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kharkiv" />

        <div className="owner">
        <a href = "https://github.com/vashatasha/weather-react">Open-source code</a>
        <span> by Tetiana Vatula</span>
    </div>
      </div>
    </div>
  );
}