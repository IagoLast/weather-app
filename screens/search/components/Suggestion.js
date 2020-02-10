import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import locationService from '../../../location.service';

export default function Search(props) {
    return (
        <TouchableHighlight onPress={() => { locationService.navigateTo(`/${props.id}`) }} style={styles.suggestion}>
            <Text style={styles.suggestionText}> {props.name} </Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF9100',
        height: '100%'
    },
    suggestion: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
    },
    suggestionText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#FFF',
        paddingVertical: 15,
        paddingHorizontal: 30, 
        fontFamily: 'monserrat-bold',
    }
});
