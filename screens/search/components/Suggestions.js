import React from 'react';
import locations from './locations';
import { View } from 'react-native';
import Suggestion from './Suggestion';

export default function Suggestions(props) {

    if (props.query.length < 2 || !props.query) {
        return (
            <View>
                <Suggestion name="Pontevedra" id="36038" />
                <Suggestion name="A Coruña" id="15030" />
                <Suggestion name="Lugo" id="27028" />
                <Suggestion name="Ourense" id="32054" />
            </View>
        )
    }

    const suggestions = [];

    for (const key in locations) {
        if (key.toLowerCase().includes(props.query.toLowerCase())) {
            suggestions.push({ name: key, id: locations[key] });
        }
    }

    return (
        <View>
            {suggestions.map(({ name, id }) => <Suggestion id={id} name={name} key={id} />)}
        </View>
    );
}