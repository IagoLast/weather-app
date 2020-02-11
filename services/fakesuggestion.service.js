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
    return DEFAULT_SUGGESTIONS;
}

export async function addSuggestion(suggestion) {
}

export default {
    getSuggestions,
    addSuggestion,
    DEFAULT_SUGGESTIONS,
}
