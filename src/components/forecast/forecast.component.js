import React, { Component } from 'react';
import Weather from './weather/weather.component';
import Spinner from '../spinner/spinner.component';

export default class Forecast extends Component {
  render() {
    if (this.props.state === 'ERROR') {
      return <h1> ERROR </h1>
    }
    if (!this.props.forecast) {
      return <Spinner/>;
    }
    return <Weather id={ this.getLocationId() } index={ this.props.index } changeIndex={ this.props.changeIndex } forecast={ this.props.forecast } />;
  }

  componentDidMount() {
    if (this.props.state === 'ERROR') {
      return;
    }
    if (!this.props.forecast) {
      this.props.getForecast(this.getLocationId());
    }
  }

  getLocationId() {
    return this.props.location.pathname.split('/')[2];
  }
}
