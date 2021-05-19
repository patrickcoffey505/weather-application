import React from 'react';
import { Card } from 'semantic-ui-react'
// import './styles.css';

export default function Forecast({ forecastData }) {
    const list_data=forecastData.map((data,id)=>{
        return (
            <Card>
                <Card.Header>{new Date(data.dt * 1000).toLocaleString('en-US', { hour: 'numeric', hour12: true })}</Card.Header>
                <Card.Content>
                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt=""/>
                    <h3>{data.main.temp}&deg;F</h3>
                </Card.Content>
            </Card>
        )
    });

    return (
        <container>
            <h2>24 Hour Forecast:</h2>
            {list_data}
        </container>
    );
};