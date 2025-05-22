import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../Images/images.jpg';
import '../App.css'; // assuming CSS is moved here

const WeatherApp = () => {
  const [name, setName] = useState('Jaipur');
  const [tem, setTem] = useState('');
  const [windspeed, setWindspeed] = useState('');
  const [humidity, setHumidity] = useState('');
  const [icon, setIcon] = useState('');

  const API_KEY = "e63e9608597b80f199ef5568c81ab5c1";

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`);
      const data = response.data;
      setTem(Math.round(data.main.temp));
      setWindspeed(data.wind.speed);
      setHumidity(data.main.humidity);
      setIcon(data.weather[0].icon);
    } catch (error) {
      alert('City not found!');
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Weather App</h1>
        <div className="search">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter City..."
          />
          <button onClick={fetchWeather}><img className='img' src={logo} alt="Search" /></button>
        </div>

        <div className="weather">
          <img
            className='weather-icon'
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt="Weather Icon"
          />
          <h1>{tem}°C</h1>
          <h2>{name}</h2>

<div className="details">
  <div className="col">
    <img src="https://cdn-icons-png.flaticon.com/512/728/728093.png" alt="Humidity" width="40" />
    <p className="humidity">Humidity - {humidity}%</p>
  </div>
  <div className="col">
    <img src="https://cdn-icons-png.flaticon.com/512/2011/2011448.png" alt="Wind" width="40" />
    <p className="wind">Windspeed - {windspeed} km/h</p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
