import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import locationService from '../../../../location.service';

export default function Header(props) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 60 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableHighlight onPress={() => locationService.navigateTo('/search')} >
                    <Text style={{ fontSize: 18, color: '#FFF', textTransform: 'uppercase' }}> {props.name} </Text>
                </TouchableHighlight>
            </View>
            <Text style={{ fontSize: 18, color: '#FFF', textTransform: 'uppercase' }}> {props.nextDay ? 'MAÑÁ' : 'HOXE'} </Text>
        </View>
    );
}