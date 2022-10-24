import "./styles.css";

export default function City() {
  let cityData = {
    city: "Kharkiv"
  };
  return (
    <h1 className="city">
      {cityData.city}
    </h1>
  );
}
