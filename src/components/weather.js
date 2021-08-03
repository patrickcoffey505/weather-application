import React, { Component } from 'react';
// import './styles.css';
import { Button } from 'semantic-ui-react'
import moment from 'moment';

class Weather extends Component {

    refresh = () => {
      window.location.reload();
    }

    render() {
        return (
            <container>
                <h1 className="header">{this.props.weatherData.name}</h1>
                <h4>{moment().format('dddd')} {moment().format('LL')}</h4>
                <img src={`http://openweathermap.org/img/w/${this.props.weatherData.weather[0].icon}.png`} alt='' />
                <h3>{this.props.weatherData.main.temp}&deg;F</h3>
                <p>Sunrise: {new Date(this.props.weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US')}</p>
                <p>Sunset: {new Date(this.props.weatherData.sys.sunset * 1000).toLocaleTimeString('en-US')}</p>
                <p>Description: {this.props.weatherData.weather[0].description}</p>
                <Button className="button" inverted color='blue' circular icon='refresh' onClick={this.refresh} />

            </container>
        )
    }
}

export default Weather;