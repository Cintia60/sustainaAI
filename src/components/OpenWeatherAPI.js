// src/api/OpenWeatherAPI.js
const API_KEY = 'SUA_CHAVE_API';

export const fetchWeatherData = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return data;
};
