import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Suggestions from './components/Suggestions';

export default function Search(props) {
    const [query, setQuery] = useState('');
    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 60, paddingLeft: 30, paddingRight: 30, marginBottom: 60 }}>
                <TextInput
                    style={{
                        fontSize: 20,
                        borderBottomColor: 'rgba(255, 255, 255, 0.7)',
                        borderBottomWidth: 1,
                        padding: 10,
                        color: '#FFF',
                    }}
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                    placeholder="Buscar un municipio"
                    onChangeText={setQuery}
                />
            </View>


            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, color: 'rgba(255, 255, 255, 0.7)', paddingHorizontal: 30, marginBottom: 20 }}> Suxerencias </Text>
                <Suggestions query={query} />
            </View>

            <View>
                <Image
                    source={require('../../assets/images/clouds.png')}
                    style={{ height: 200 }}
                    resizeMode="contain"
                />
                <View style={{ padding: 30 }}>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 12 }}> A project by Match&Go Labs </Text>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 12 }}> Información meteorolóxica ofrecida pola AEMET. </Text>
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
