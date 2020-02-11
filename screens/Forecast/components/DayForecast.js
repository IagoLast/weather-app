import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import Header from './components/Header.js';
import Temperature from './components/Temperature.js';
import Weather from './components/Weather.js';
import NightBackground from './components/NightBackground.js';


export default function Forecast(props) {
    const [isHover, setIsHover] = useState(false);

    if (!props.forecast) {
        return null;
    }

    return (
        <TouchableWithoutFeedback onPressIn={() => setIsHover(true)} onPressOut={() => setIsHover(false)}>
            <View style={{ height: '100%', width: '100%', backgroundColor: props.forecast.style.background }}>
                {props.forecast.style.background == 'rgb(23, 29, 60)' ? <NightBackground /> : null}
                <Header name={props.forecast.name} nextDay={props.nextDay} />
                {
                    isHover
                        ? <Temperature {...props.forecast} />
                        : <Weather description={props.forecast.description} image={props.forecast.src} />
                }

            </View >
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    container: {
    },
});
