import React from "react";



import SearchWeather from "./SearchWeather";

import './App.css';



  function App() {
  return (
   
<div className="App">
  

      <h1>Weather App</h1>
      <div className=" p-3">
        <div className="container p-5 mb-4 bg-light rounded-3">
        <SearchWeather city="Apple Valley" />
        </div>
      </div>
      
         
         <footer>
        <a
          href="https://github.com/Zahradalmar/weather-react"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Zahra Mohamed
      </footer>
   
       
      </div>
       
  );
}

export default App;
