import React from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import locationService from '../../../../location.service';

export default function Header(props) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, paddingVertical: 60 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableHighlight underlayColor="rgba(0, 0, 0, .1)" onPress={() => locationService.navigateTo('/search')} >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ width: 16, height: 16, marginRight: 8 }}
                            resizeMode="contain"
                            source={require('../../../../assets/images/search.png')}
                        />
                        <Text style={{ fontFamily: 'monserrat', fontSize: 18, color: '#FFF', textTransform: 'uppercase' }}> {props.name} </Text>
                    </View>
                </TouchableHighlight>
            </View>
            <Text style={{ fontFamily: 'monserrat', fontSize: 18, color: '#FFF', textTransform: 'uppercase' }}> {props.nextDay ? 'MAÑÁ' : 'HOXE'} </Text>
        </View >
    );
}