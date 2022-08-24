import React, { useState } from "react";


import WeatherForecast from "./WeatherForecast";

import axios from "axios";

import "./SearchWeather.css";



export default function SearchWeather(props){
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");
  
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let date = new Date();

  let day = days[date.getDay()];

  let hours = date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  

  function handleResponse(response){
    
    setLoaded(true);
    setWeather({
      
      coords: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });

  }

  function submitSearch(){
    let apiKey = "1d2d7ae3cef5d0f29cee6f2f8551ecdf";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
     
  function handleSubmit(event) {
    event.preventDefault();
    submitSearch();
    
    
  }

function updateCity(event) {
  event.preventDefault();
  setCity(event.target.value);
    
  }
let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a City" autoComplete="non" onChange={updateCity} />
      <button type="submit">Search</button>
    </form>
  );
  
  
  if (loaded) {
    return (
      <div className="loaded">
        {form}
        <p className="city">
          Current Weather in {props.city}, {weather.country}
        </p>

        <div className="row">
          <div className="col-6 float-start">
            <ul>
              <li>
                <strong>
                  Last updated: {day}
                  <span>
                    {""} {hours}:{minutes}
                  </span>
                </strong>
              </li>
              <li>
                <strong>
                  Temperature: {Math.round(weather.temperature)}°C
                </strong>
              </li>
              <li>
                <strong>Description: {weather.description}</strong>
              </li>
              <li>
                {" "}
                <img src={weather.icon} alt={weather.description} />
              </li>
            </ul>
          </div>
          <div className="col-6 float-md-end">
            <ul>
              <li>
                <strong>Humidity: {Math.round(weather.humidity)}%</strong>
              </li>
              <li>
                <strong>Wind: {Math.round(weather.wind)}km/h</strong>
              </li>
            </ul>
          </div>
        </div>
        <WeatherForecast />
        
    </div>
    
    );
  } else {
    submitSearch();
    return form;
    }

 
 
}