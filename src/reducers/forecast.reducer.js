import { SET_FORECAST, SET_FORECAST_ERROR, FETCH_FORECAST, INDEX_CHANGED, CLEAR_FORECAST } from '../actions'

export const WAITING = "WAITING";
export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const SUCCESS = 'SUCCESS'


const INITIAL_STATE = {
  state: '',
  forecast: null,
  index: -1,
};

export default function forecast(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_FORECAST:
      return {
        state: LOADING,
        forecast: null,
        index: -1,
      };
    case SET_FORECAST:
      return {
        state: SUCCESS,
        forecast: action.payload,
        index: 0,
      };
    case SET_FORECAST_ERROR:
      return {
        state: ERROR,
        forecast: action.payload,
        index: -1,
      }
    case INDEX_CHANGED: {
      return {
        state: SUCCESS,
        forecast: state.forecast,
        index: action.payload,
      }
    }
    case CLEAR_FORECAST:
      return INITIAL_STATE;
    default:
      return state;
  }
}
