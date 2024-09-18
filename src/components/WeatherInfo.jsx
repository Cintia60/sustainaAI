// src/components/WeatherInfo.jsx
import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api/OpenWeatherAPI';

const WeatherInfo = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeatherData(city);
      setWeather(data);
    };
    getWeather();
  }, [city]);

  return (
    <div>
      {weather ? (
        <div>
          <h3>Clima em {city}</h3>
          <p>Temperatura: {weather.main.temp}°C</p>
          <p>Umidade: {weather.main.humidity}%</p>
          <p>Vento: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default WeatherInfo;
