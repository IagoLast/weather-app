import React, { useState, useEffect } from 'react';
import locations from './locations';
import { ScrollView } from 'react-native';
import Suggestion from './Suggestion';
import suggestionService from '../../../services/fakesuggestion.service';
import locationService from '../../../location.service';


export default function Suggestions(props) {
    const [savedSuggestions, setSavedSuggestions] = useState(suggestionService.DEFAULT_SUGGESTIONS);

    useEffect(() => {
        suggestionService.getSuggestions().then(setSavedSuggestions);
    }, []);

    if (props.query.length < 2 || !props.query) {
        return (
            <ScrollView>
                {savedSuggestions.map(({ name, id }) => <Suggestion id={id} name={name} key={id} onClick={onClick} />)}
            </ScrollView>
        )
    }
    // there is a query, forget about saved suggestions
    const suggestions = [];
    for (const key in locations) {
        if (key.toLowerCase().includes(props.query.toLowerCase())) {
            suggestions.push({ name: key, id: locations[key] });
        }
    }

    return (
        <ScrollView>
            {suggestions.map(({ name, id }) => <Suggestion id={id} name={name} key={id} onClick={onClick} />)}
        </ScrollView>
    );
}

function onClick({ name, id }) {
    suggestionService.addSuggestion({ name, id });
    locationService.navigateTo(`/${id}`);
}