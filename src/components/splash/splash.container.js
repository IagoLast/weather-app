import Splash from './splash.component';
import { getUserPosition } from 'redux-browser-geolocation';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  getUserPosition: () => {
    dispatch(getUserPosition())
  },

  goToSearch: () => {
    dispatch(push('/search'))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash)
