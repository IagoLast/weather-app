import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, TouchableWithoutFeedback, StatusBar } from 'react-native';
import Header from './components/Header.js';
import Weather from './components/Weather.js';
import Temperature from './components/Temperature.js';



export default function Forecast(props) {
    const [isHover, setIsHover] = useState(false);

    if (!props.forecast) {
        return null;
    }

    return (
        <TouchableWithoutFeedback onPressIn={() => setIsHover(true)} onPressOut={() => setIsHover(false)}>
            <View style={{ height: '100%', padding: 30, backgroundColor: props.forecast.style.background }}>
                <Header name={props.forecast.name} nextDay={props.nextDay} />
                {
                    isHover
                        ? <Temperature description={props.forecast.description} image={props.forecast.src} />
                        : <Weather description={props.forecast.description} image={props.forecast.src} />
                }

            </View >
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
    },
});
