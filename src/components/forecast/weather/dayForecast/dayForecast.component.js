import React, { Component } from 'react';
import Temperature from './temperature/temperature.component';
import Swipe from 'react-swipe-component';
import './dayForecast.css';

export default class DayForecast extends Component {
  render() {
    return (
      <Swipe delta={150} onSwipedDown={this.reload} onSwipedUp={this.share.bind(this)} className="DayForecast" style={this.props.forecast.style}>
        <h1>{this.props.forecast.description}</h1>
        <h5>{this._translateDate(this.props.date)}</h5>
        <img className="Meme" src={this.props.forecast.src} alt={this.props.forecast.description} />
        <aside style={this.props.forecast.style}>
          <Temperature rainProb={this.props.forecast.rainProb} tmp={this.props.forecast.tmp} max={this.props.forecast.max} min={this.props.forecast.min}></Temperature>
        </aside>
      </Swipe>
    )
  }

  share() {
    this._sharePlugin()
    // const url = `https://weather-app-e1234.firebaseapp.com/w/${this.props.id}`;
    // navigator.share ? this._shareNative(url) : this._sharePlugin();
  }

  reload() {
    window.location.reload(true);
  }

  _sharePlugin() {
    if (window.plugins && window.plugins.socialsharing) {
      navigator.screenshot.save((error, res) => {
        if (error) {
          return console.error(error);
        }
        window.plugins.socialsharing.share('A previsión do tempo', 'Trebo', `file://${res.filePath}`);
      });

    }
  }

  // Native share cant share images
  _shareNative(url) {
    navigator.share({
      title: 'Trebo',
      text: 'O tempo en Galicia',
      url
    })
  }

  _translateDate(date) {
    const days = ['Domingo', 'Lúns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado'];
    const months = [
      'Xaneiro',
      'Febreiro',
      'Marzo',
      'Abril',
      'Maio',
      'Xuno',
      'Xullo',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Decembro']

    return `${days[date.getDay()]} ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
  }
}
