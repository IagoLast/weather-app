import { FILTER_SUGGESTIONS, CLEAR_SUGGESTIONS, UPDATE_VALUE } from '../actions/index.js';
import MUNICIPES from '../data/municipes.js';

const INITIAL_STATE = {
  value: '',
  suggestions: [],
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_SUGGESTIONS:
      return {
        value: state.value,
        suggestions: MUNICIPES.filter(municipe => municipe.nm.toLowerCase().includes(action.payload.value.toLowerCase()))
      };
    case CLEAR_SUGGESTIONS:
      return {
        value: state.value,
        suggestions: []
      };
    case UPDATE_VALUE:
      return {
        value: action.payload.value,
        suggestions: state.suggestions.slice()
      };
    default:
      return state;
  }
}
