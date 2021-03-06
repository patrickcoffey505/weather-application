import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import Forecast from './components/forecast';
import SearchBar from './components/searchBar';
// import NavigationBar from './components/navigationBar';
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
          setWeatherData(result)
          console.log(result);
      })
    
      await fetch(`${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&cnt=8&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setForecastData(result.list)
          console.log(result.list);
      })
    }
    fetchData();
  }, [lat, long]);

  const setLocation = async e => {
    await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${e.target.value}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setLat(result.coord.lat);
      setLong(result.coord.lon);
    });
  }
      
  return (
    <div className="App">

      {(typeof weatherData.main != 'undefined' && typeof forecastData != 'undefined') ? (
        <div
        style={ { backgroundImage: `url(/background-images/${weatherData.weather[0].icon}.gif)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh' } } >
          <div>
            <ul id="nav">
              <li><h3>WEATHER APP</h3></li>
              <li><SearchBar
                    value=""
                    handleSubmit={setLocation} />
              </li>
              {/* <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li> */}
            </ul>
          </div>

          <Weather weatherData={weatherData}/>
          <br/>
          <Forecast forecastData={forecastData}/>
        </div>
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