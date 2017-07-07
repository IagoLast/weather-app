import { FETCH_FORECAST, SET_FORECAST, SET_FORECAST_ERROR } from '../../actions'
import transformForecast from './transformForecast.js';


const forecastSuccess = forecast => {
  return {
    type: SET_FORECAST,
    payload: forecast,
  }
}

const forecastError = error => {
  return {
    type: SET_FORECAST_ERROR,
    payload: error,
    error: true,
  }
}

/**
 * Middleware
 */
export default ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case FETCH_FORECAST:
      getWeather(dispatch, action.payload)
        .then(transformForecast)
        .then(forecast => {
          dispatch(forecastSuccess(forecast))
        })
        .catch(err => dispatch(forecastError(err)));
      break;
    default:
      break;
  }
  return next(action)
}



export function getWeather(dispatch, id) {
  return fetch(`https://meteosapi-server.herokuapp.com/api/v1/simple/${id}`).then(response => response.json())
}



