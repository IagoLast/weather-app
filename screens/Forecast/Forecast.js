import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import DayForecast from './components/DayForecast';
import weatherService from '../../services/weather.service';
import Spinner from '../../components/Spinner/Spinner';

export default function Forecast(props) {
    const slides = [{ key: '0' }, { key: '1' }]
    const [forecast, setForecast] = useState({});

    useEffect(() => {
        weatherService.getWeather(props.id).then(setForecast);
    }, [props.id]);


    if (!forecast.name) {
        return <Spinner />
    }

    slides[0].forecast = forecast.today;
    slides[1].forecast = forecast.tomorrow;


    return (
        <AppIntroSlider hidePagination={true} style={{ height: '100%' }} showNextButton={false} showDoneButton={false} renderItem={_renderItem} slides={slides} />
    );
}

function _renderItem({ item, index }) {
    return <DayForecast nextDay={index > 0} forecast={item.forecast} />
}