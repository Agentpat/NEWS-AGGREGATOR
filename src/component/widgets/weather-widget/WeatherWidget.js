import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './WeatherWidget.css';

const WeatherWidget = () => {
  const [city, setCity] = useState('Lagos'); 
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26a926201928288196e74aeffe4209b0`
      );

      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }, [city]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData, city]); 

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    fetchWeatherData(); 
  };

  return (
    <div className="weather-widget">
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleCityChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weatherData && (
        <>
          <div className="weather-info">
            <h2>{weatherData.name}</h2>
            <p>{weatherData.weather[0].description}</p>
            <p>{Math.round(weatherData.main.temp - 273.15)}°C</p>
          </div>
          <div className="weather-icon">
            <img
              src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherWidget;
