import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=5da7b2dc058f07286fea39c4cee516a3&units=metric`;
    axios.get(url).then(showWeather);
  }

  let form = (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city"
        required
        className="search-input"
        onChange={updateCity}
      />
      <input type="submit" value="Search" className="search-button" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <div className="weather-data">
          <div>
            <h1 className="city">{city}</h1>
            <div className="weather-details">
              <p>
                {weather.description}
                <br />
                Humidity: <strong>{Math.round(weather.humidity)}%</strong>,
                Wind:
                <strong>{weather.wind} km/h</strong>
              </p>
            </div>
          </div>
          <div className="temperature-and-sky">
            <div className="weather-icon">
              <img src={weather.icon} alt={weather.description} />
            </div>
            <div className="temperature-value">
              {Math.round(weather.temperature)}
            </div>
            <div className="degree-symbol">°C</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
