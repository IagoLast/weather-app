import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

export default function Temperature(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: '900', fontSize: 52, color: '#fff' }}> 15º</Text>
            </View>

            <View style={{ padding: 30, flexDirection: 'row', justifyContent: 'space-between', textAlign: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ marginBottom: 12, marginHorizontal: 'auto', width: 28, height: 28 }}
                        resizeMode="contain"
                        source={require('../../../../assets/images/min.png')}
                    />
                    <Text style={{ color: '#FFF', fontSize: 16, fontWeight: '900', textAlign: 'center' }}> 13º </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ marginBottom: 12, marginHorizontal: 'auto', width: 28, height: 28 }}
                        resizeMode="contain"
                        source={require('../../../../assets/images/max.png')}
                    />
                    <Text style={{ color: '#FFF', fontSize: 16, fontWeight: '900', textAlign: 'center' }}> 17º </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ marginBottom: 12, marginHorizontal: 'auto', width: 28, height: 28 }}
                        resizeMode="contain"
                        source={require('../../../../assets/images/rp.png')}
                    />
                    <Text style={{ color: '#FFF', fontSize: 16, fontWeight: '900', textAlign: 'center' }}> 100% </Text>
                </View>
            </View>
        </View>
    );
}

