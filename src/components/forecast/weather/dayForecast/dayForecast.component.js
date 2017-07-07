import React, { Component } from 'react';
import Temperature from './temperature/temperature.component';
import Swipe from 'react-swipe-component';
import './dayForecast.css';

const DATE_OPTS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

export default class DayForecast extends Component {
  render() {
    return (
      <Swipe delta={ 150 } onSwipedUp={ this.share.bind(this) } className="DayForecast" style={ this.props.forecast.style }>
        <h1>{ this.props.forecast.description }</h1>
        <h5>{ this.props.date.toLocaleDateString('es', DATE_OPTS) }</h5>
        <img className="Meme" src={ this.props.forecast.src } alt={ this.props.forecast.description } />
        <aside style={ this.props.forecast.style }>
          <Temperature rainProb={ this.props.forecast.rainProb } tmp={ this.props.forecast.tmp } max={ this.props.forecast.max } min={ this.props.forecast.min }></Temperature>
        </aside>
      </Swipe>
    )
  }

  share() {
    const options = {
      url: `https://weather-app-e1234.firebaseapp.com/w/${this.props.id}`,
    }

    if (window.plugins && window.plugins.socialsharing) {
      window.plugins.socialsharing.shareWithOptions(options);
    }
  }
}
