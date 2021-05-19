import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import Forecast from './components/forecast';
import { Dimmer, Loader } from 'semantic-ui-react';

function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  
  useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });

        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeatherData(result);
          console.log(result);
        });

        await fetch(`${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setForecastData(result.list);
          console.log(result);
        });
      }
      fetchData();
  }, [lat, long])
      
  return (
    <div className="App">

      {(typeof weatherData.main != 'undefined' && typeof forecastData != 'undefined') ? (
        <container>
          <Weather weatherData={weatherData}/>
          <br/>
          <Forecast forecastData={forecastData.slice(0,8)}/>
        </container>
      ): (
      <div>
        <Dimmer active>
          <Loader>Loading..</Loader>
        </Dimmer>
      </div> )}

    </div>
  );
}

export default App;