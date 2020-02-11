import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

export default function Temperature(props) {
    return (
        <View style={{ padding: 30, flex: 1, justifyContent: 'space-between' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text pointerevents="none" style={{ fontFamily: 'monserrat-bold', fontWeight: '900', fontSize: 64, color: '#fff' }}> {props.tmp}º</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', textAlign: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ marginBottom: 12, marginHorizontal: 'auto', width: 28, height: 28 }}
                        resizeMode="contain"
                        source={require('../../../../assets/images/min.png')}
                    />
                    <Text pointerevents="none" style={{ fontFamily: 'monserrat-bold', color: '#FFF', fontSize: 16, fontWeight: '900', textAlign: 'center' }}> {props.min}º </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ marginBottom: 12, marginHorizontal: 'auto', width: 28, height: 28 }}
                        resizeMode="contain"
                        source={require('../../../../assets/images/max.png')}
                    />
                    <Text pointerevents="none" style={{ fontFamily: 'monserrat-bold', color: '#FFF', fontSize: 16, fontWeight: '900', textAlign: 'center' }}> {props.max}º </Text>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ marginBottom: 12, marginHorizontal: 'auto', width: 28, height: 28 }}
                        resizeMode="contain"
                        source={require('../../../../assets/images/rp.png')}
                    />
                    <Text pointerevents="none" style={{ fontFamily: 'monserrat-bold', color: '#FFF', fontSize: 16, fontWeight: '900', textAlign: 'center' }}> {props.rainProb}% </Text>
                </View>
            </View>
        </View>
    );
}

