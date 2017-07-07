import { combineReducers } from 'redux';
import search from './search.reducer';
import forecast from './forecast.reducer';

const rootReducer = combineReducers({
  search,
  forecast,
})

export default rootReducer;
