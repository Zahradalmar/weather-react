import React from "react";
import axios from "axios";
import loader from "react-loader-spinner";

export default function Weather(props){
  function handleResponse(response){
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    
  }
  let apiKey = "1d2d7ae3cef5d0f29cee6f2f8551ecdf";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse)
  return(
   <loader
    type = "puff"
    color = "green"
    width = "100"
    height = "100"
    timeout={3000}
  
  />
  );
}