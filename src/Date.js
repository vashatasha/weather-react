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
    if (currentMinutes < 10) { return (currentMinutes=`0 + ${currentMinutes} : ''`)}
    
      return (`${currentDay}, ${currentHours}:${currentMinutes}`)
    }
