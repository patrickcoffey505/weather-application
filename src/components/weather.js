import React from 'react';
// import './styles.css';
import { Card, Button } from 'semantic-ui-react'
import moment from 'moment';

const refresh = () => {
    window.location.reload();
}

const CardExampleCard = ({weatherData}) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">City: {weatherData.name}</Card.Header>
            <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
            <p>Temperature: {weatherData.main.temp}&deg;F</p>
            <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Day: {moment().format('dddd')}</p>
            <p>Date: {moment().format('LL')}</p>
            <p>Description: {weatherData.weather[0].description}</p>
        </Card.Content>
    </Card>
)

export default CardExampleCard;