import React from 'react';
import { Image, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';

export default function Spinner() {
    return (
        <ImageBackground
            resizeMode="contain"
            style={{ backgroundColor: '#FF9100', width: '100%', height: '100%' }}
            source={require('../../assets/images/splash.png')}
        >
        </ImageBackground>
    );
}