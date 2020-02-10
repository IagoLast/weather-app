import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

export default function Weather(props) {
    return (
        <View style={{ padding: 30 }}>
            <View style={{ marginBottom: 60 }}>
                <Text pointerevents="none" style={{ fontFamily: 'monserrat-bold', fontSize: 30, color: '#FFF', textTransform: 'uppercase', fontWeight: '800' }}>{props.description}</Text>
                <Text pointerevents="none" style={{ fontFamily: 'monserrat', fontSize: 12, color: '#FFF', textTransform: 'uppercase', marginTop: 30 }}>Domingo 9 de Febreiro de 2020</Text>
            </View>
            <Image
                resizeMode="contain"
                source={props.image}
                style={{ width: '100%', height: 250 }}>
            </Image>
        </View>
    );
}

