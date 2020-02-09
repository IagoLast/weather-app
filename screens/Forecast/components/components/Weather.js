import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

export default function Weather(props) {
    return (
        <View>
            <View style={{ padding: 30 }}>
                <Text style={{ fontSize: 30, color: '#FFF', textTransform: 'uppercase', fontWeight: '800' }}>{props.description}</Text>
                <Text style={{ fontSize: 12, color: '#FFF', textTransform: 'uppercase', marginTop: 30 }}>Domingo 9 de Febreiro de 2020</Text>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 60, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Image
                    resizeMode="contain"
                    source={props.image}
                    style={{ marginHorizontal: 'auto', width: 300, height: 300 }}
                />
            </View>
        </View>
    );
}

