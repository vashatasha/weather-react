import "./styles.css";

export default function Sky() {
  let skyData = {
    sky: "Partly cloudy"
  };
  return (
    <h6 className="sky">
      {skyData.sky}
    </h6>
  );
}
