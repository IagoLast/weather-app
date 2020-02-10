import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import locationService from '../../../../location.service';

export default function Header(props) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 30, marginBottom: 30 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableHighlight onPress={() => locationService.navigateTo('/search')} >
                    <Text style={{ fontFamily: 'monserrat', fontSize: 18, color: '#FFF', textTransform: 'uppercase' }}> {props.name} </Text>
                </TouchableHighlight>
            </View>
            <Text style={{ fontFamily: 'monserrat', fontSize: 18, color: '#FFF', textTransform: 'uppercase' }}> {props.nextDay ? 'MAÑÁ' : 'HOXE'} </Text>
        </View>
    );
}