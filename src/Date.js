import "./styles.css";

export default function Sky() {
    let now = new Date();
    
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let currentDay = days[now.getDay()];
    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes()
    if (currentHours < 10) {
      currentHours = `0${currentHours}`;
    }
    
    if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`;
    }
    
      return (`${currentDay}, ${currentHours}:${currentMinutes}`)
    }
