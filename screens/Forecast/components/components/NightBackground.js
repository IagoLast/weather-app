import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
const dim = Dimensions.get('window');

export default function NightBackground() {
    return (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Svg height="100%" width="100%" >
                <Defs>
                    <LinearGradient id="grad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <Stop offset="0" stopColor="rgb(23, 29, 60)" />
                        <Stop offset="40%" stopColor="rgb(33, 79, 99)" />
                        <Stop offset="100%" stopColor="rgb(23, 29, 60)" />
                    </LinearGradient>
                </Defs>
                <Rect height={dim.height} width={dim.width} fill="url(#grad)" />
            </Svg>
        </View>
    );
}