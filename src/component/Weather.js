import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import logo from '../Images/images.jpg'
const Weather = () => {
  const [a, setA] = useState(false)
  const [name, setName] = useState('Jaipur')
  const [tem, setTem] = useState('')
  const [windspeed, setWindspeed] = useState('')
  const [humidity, setHumidity] = useState('')
  const [icon, setIcon] = useState('')

  const ayush = "e63e9608597b80f199ef5568c81ab5c1";
  const apicall = async () => {
    const store = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${ayush}`)
    console.log(store.data);
    setTem(Math.round(store.data.main.temp))
    setWindspeed(store.data.wind.speed)
    setHumidity(store.data.main.humidity)
    setIcon(store.data.weather[0].icon)

console.log(store.data.weather[0].icon);
  }
  
  useEffect(() => {
    apicall()

   
  }, [])

  return (
    <div>
      
      <div class="card">
        {/* <div class="title"> */}
        <h1>Weather App</h1>
      {/* </div> */}
        <div class="search">
          <input type="text" onChange={(q) => { setName(q.target.value) }} placeholder="Enter City..." id="city-search" />
          <button onClick={apicall}><img className='img' src={logo} /></button>
        </div>
        {/* {a && apicall()} */}
        {a && <span className='am'>aaa</span>}
        <div class="weather-details" style={{ display: "none;" }}>
          <div class="city"></div>
          <div class="weather">
            <h1 class="temp"></h1>
            <h2 class="description"></h2>
          </div>
          <br />

          <img className='weather-icon' src= {`https://openweathermap.org/img/wn/${icon}.png`} alt="Weather Icon"></img>



          <br />
          <br />


          <h2 style={{ fontSize: '45px' }}> <span style={{ fontSize: '50px' }}>{tem}°</span>C</h2>
          <h2>{name}</h2>


          <br />
          <br />
          <span className='span' style={{marginLeft : '-35px'}}>Humidity - {humidity}%</span>
      

          <span className='span' style={{marginLeft : '20px'}}>Windspeed  - {windspeed}km/h</span>

        </div>
      </div>

    </div>
  )

}


export default Weather;