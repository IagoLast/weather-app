export const FILTER_SUGGESTIONS = 'FILTER_SUGGESTIONS';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';
export const UPDATE_VALUE = 'UPDATE_VALUE';

export const FETCH_FORECAST = 'FETCH_FORECAST';
export const SET_FORECAST = 'SET_FORECAST';
export const SET_FORECAST_ERROR = 'SET_FORECAST_ERROR';
export const CLEAR_FORECAST = 'CLEAR_FORECAST';

export const INDEX_CHANGED = 'INDEX_CHANGED';

export const filterSuggestions = value => {
  return {
    type: FILTER_SUGGESTIONS,
    payload: {
      value,
    }
  };
};

export const clearSuggestions = () => {
  return {
    type: CLEAR_SUGGESTIONS
  };
};

export const updateValue = value => {
  return {
    type: UPDATE_VALUE,
    payload: {
      value,
    }
  };
};


export const getForecast = id => {
  return {
    type: FETCH_FORECAST,
    payload: id,
  }
}

export const changeIndex = index => {
  return {
    type: INDEX_CHANGED,
    payload: index,
  }
}

export const clearForecast = () => {
  return {
    type: CLEAR_FORECAST,
  }
}
