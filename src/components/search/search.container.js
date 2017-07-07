import Search from './search.component';
import { connect } from 'react-redux';
import { filterSuggestions, clearSuggestions, updateValue, clearForecast } from '../../actions';
import { push } from 'react-router-redux'

const mapStateToProps = state => {
  return state.default.search;
};

const mapDispatchToProps = dispatch => {
  return {
    onSuggestionSelected: id => {
      dispatch(updateValue(''));
      dispatch(push(`/w/${id}`));
    },
    filterSuggestions: value => {
      dispatch(filterSuggestions(value));
    },
    clearSuggestions: () => {
      dispatch(clearSuggestions());
    },
    updateValue: value => {
      dispatch(updateValue(value));
    },
    navigate: url => {
      dispatch(push(url));
    },
    clearForecast: () => {
      dispatch(clearForecast());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

