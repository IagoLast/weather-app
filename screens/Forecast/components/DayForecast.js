import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Header from './components/Header.js';
import Weather from './components/Weather.js';
import Temperature from './components/Temperature.js';



export default function Forecast(props) {
    const dim = Dimensions.get('window');
    const [isHover, setIsHover] = useState(false);

    if (!props.forecast) {
        return null;
    }

    return (
        <TouchableWithoutFeedback delayPressIn={200} onPressIn={() => setIsHover(true)} onPressOut={() => setIsHover(false)}>
            <View style={{ height: dim.height, backgroundColor: props.forecast.style.background }}>
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
