import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import DayForecast from './dayForecast/dayForecast.component';
import Header from '../header/header.container';
import './weather.css';

export default class Weather extends Component {

  handleChangeIndex = index => {
    this.props.changeIndex(index);
  };

  render() {
    let today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    return (
      <main className="Weather">
        <Header index={ this.props.index } name={ this.props.forecast.name }></Header>
        <SwipeableViews onChangeIndex={ this.handleChangeIndex.bind(this) } className="carousel">
          <DayForecast id={ this.props.id } date={ today } forecast={ this.props.forecast.today } />
          <DayForecast id={ this.props.id } date={ tomorrow } forecast={ this.props.forecast.tomorrow } />
        </SwipeableViews>
      </main>)
  }
}
