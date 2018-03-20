import React, { Component } from 'react'

export default class Splash extends Component {
  render() {
    return (
      <div onClick={this.props.getUserPosition()} className="splash" />
    )
  }

  componentDidMount() {
    this.props.getUserPosition();
    // Sometimes location cant be obtained and we need to go to the search view manually!
    setTimeout(() => {
      if (window.location.href === 'file:///android_asset/www/index.html#/') {
        this.props.goToSearch();
      }
    }, 5000);
  }

}

