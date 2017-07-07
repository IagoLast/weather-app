import { connect } from 'react-redux';
import Forecast from './forecast.component';
import { getForecast, changeIndex } from '../../actions'


const mapStateToProps = state => {
  let props = state.default.forecast;
  props.location = state.router.location;
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    getForecast: id => {
      dispatch(getForecast(id))
    },
    changeIndex: index => {
      dispatch(changeIndex(index))
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecast);

