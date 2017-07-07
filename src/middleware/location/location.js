import { push } from 'react-router-redux'
import { GEOLOCATION_FETCH_SUCCESS, GEOLOCATION_FETCH_ERROR } from 'redux-browser-geolocation';
import { DATA } from './data.js'


/**
 * Callback to execute when there is an error while getting the location ID.
 */
const onLocationError = (error, dispatch) => {
  console.error(error);
  dispatch(push('/search'));
}

/**
 * Callback executed when the location ID is obtained.
 */
const onLocationId = (id, dispatch) => {
  if (id) {
    dispatch(push(`/w/${id}`))
  } else {
    onLocationError('Location exists, but not in the list', dispatch);
  }
}

/**
 * Middleware
 */
export default ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case GEOLOCATION_FETCH_SUCCESS:
      find(action.payload.coords.latitude, action.payload.coords.longitude, DATA)
        .then(id => onLocationId(id, dispatch))
        .catch(err => onLocationError(err, dispatch))
      break;
    case GEOLOCATION_FETCH_ERROR:
      onLocationError(action.payload, dispatch);
      break;
    default:
      break;
  }
  return next(action)
}

/**
 * Obtains the name of a province from the given coordinates or undefined if the province is not in the list
 */
function find(lat, lon, list) {
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&language=gl&key=AIzaSyAxksu5q-0foO4lsXwLRg2dS954dnBmoEw`)
    .then(response => response.json())
    .then(data => data.results[0].address_components.find(findMunicipe).long_name)
    .then(name => list[name]);
}

/**
 * Find the name of a municipe from a adress component
 */
function findMunicipe(component) {
  return component.types.includes('administrative_area_level_4') || component.types.includes('locality') || component.types.includes('administrative_area_level_2')
}
