import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function Search(props) {
    return (
        <TouchableHighlight underlayColor="rgb(218, 124, 0)" onPress={() => props.onClick({ ...props })} style={styles.suggestion}>
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
        borderBottomColor: '#ffffff80',
    },
    suggestionText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#FFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        fontFamily: 'monserrat-bold',
    }
});
