import Splash from './splash.component';
import { getUserPosition } from 'redux-browser-geolocation';
import { connect } from 'react-redux'


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  getUserPosition: () => {
    dispatch(getUserPosition())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash)
