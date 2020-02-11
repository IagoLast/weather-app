import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import Suggestions from './components/Suggestions';

export default function Search(props) {
    const [query, setQuery] = useState('');
    return (
        <View style={styles.container}>
            <View style={{ paddingHorizontal: 30, paddingTop: 60, paddingBottom: 50 }}>
                <TextInput
                    style={{
                        fontSize: 20,
                        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
                        borderBottomWidth: 1,
                        padding: 10,
                        color: '#FFF',
                        fontFamily: 'monserrat-bold'
                    }}
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    placeholder="Buscar un municipio"
                    onChangeText={setQuery}
                />
            </View>


            <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'monserrat', fontSize: 18, color: 'rgba(255, 255, 255, 0.7)', paddingHorizontal: 30, marginBottom: 20 }}> Suxerencias </Text>
                <Suggestions query={query} />
            </View>

            <View>
                <ImageBackground
                    source={require('../../assets/images/clouds.png')}
                    style={{ height: 180 }}
                    resizeMode="contain"
                />
                <View style={{ padding: 15 }}>
                    <Text style={{ fontFamily: 'monserrat', textAlign: 'center', color: '#FFF', fontSize: 10 }}> A project by Match&Go Labs </Text>
                    <Text style={{ fontFamily: 'monserrat', textAlign: 'center', color: '#FFF', fontSize: 10 }}> Información meteorolóxica ofrecida pola AEMET. </Text>
                </View>
            </View>
        </View >
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
        paddingHorizontal: 30
    }
});
