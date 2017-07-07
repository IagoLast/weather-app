const DEFAULT_SUGGESTIONS = [
  {
    nm: 'A Coruña',
    id: '15030'
  },
  {
    nm: 'Lugo',
    id: '27028'
  },
  {
    nm: 'Ourense',
    id: '32054'
  },
  {
    nm: 'Pontevedra',
    id: '36038'
  },
];

function getSuggestions() {
  let suggestions = localStorage.getItem('recent');
  if (suggestions) {
    return JSON.parse(suggestions)
  } else {
    localStorage.setItem('recent', JSON.stringify(DEFAULT_SUGGESTIONS))
    return DEFAULT_SUGGESTIONS;
  }
}

function addSuggestion(suggestion) {
  let suggestions = JSON.parse(localStorage.getItem('recent'));
  if (suggestions.some(_suggestion => suggestion.id === _suggestion.id)) {
    return;
  }
  if (suggestions.length >= 4) {
    suggestions.pop();
  }
  suggestions.unshift(suggestion);
  localStorage.setItem('recent', JSON.stringify(suggestions))
}

export default {
  getSuggestions,
  addSuggestion,
}
