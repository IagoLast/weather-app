//TODO: Web don't work due this...
import { AsyncStorage } from 'react-native';

export const DEFAULT_SUGGESTIONS = [
    {
        name: 'A Coruña',
        id: '15030'
    },
    {
        name: 'Lugo',
        id: '27028'
    },
    {
        name: 'Ourense',
        id: '32054'
    },
    {
        name: 'Pontevedra',
        id: '36038'
    },
];

export async function getSuggestions() {
    const suggestions = await AsyncStorage.getItem('trebo-recent');
    if (suggestions) {
        return JSON.parse(suggestions)
    } else {
        await AsyncStorage.setItem('trebo-recent', JSON.stringify(DEFAULT_SUGGESTIONS))
        return DEFAULT_SUGGESTIONS;
    }
}

export async function addSuggestion(suggestion) {
    const current = await AsyncStorage.getItem('trebo-recent');
    let suggestions = JSON.parse(current);
    if (suggestions.some(_suggestion => suggestion.id === _suggestion.id)) {
        return;
    }
    if (suggestions.length >= 4) {
        suggestions.pop();
    }
    suggestions.unshift(suggestion);
    AsyncStorage.setItem('trebo-recent', JSON.stringify(suggestions))
}

export default {
    getSuggestions,
    addSuggestion,
    DEFAULT_SUGGESTIONS,
}
