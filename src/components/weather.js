import React, { Component } from 'react';
// import './styles.css';
import { Card, Button } from 'semantic-ui-react'
import moment from 'moment';

class Weather extends Component {

    refresh = () => {
      window.location.reload();
    }

    render() {
      return (
        <Card>
            <Card.Content>
                <Card.Header className="header">{this.props.weatherData.name}</Card.Header>
                <img src={ `http://openweathermap.org/img/w/${this.props.weatherData.weather[0].icon}.png` } />
                <Button className="button" inverted color='blue' circular icon='refresh' onClick={this.refresh} />
                <p>Temperature: {this.props.weatherData.main.temp}&deg;F</p>
                <p>Sunrise: {new Date(this.props.weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p>Sunset: {new Date(this.props.weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                <p>Day: {moment().format('dddd')}</p>
                <p>Date: {moment().format('LL')}</p>
                <p>Description: {this.props.weatherData.weather[0].description}</p>
            </Card.Content>
        </Card>
      )
    }
}

export default Weather;