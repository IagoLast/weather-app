import React, { Component } from 'react'

export default class Splash extends Component {
  render() {
    return (
      <div onClick={ this.props.getUserPosition() } className="splash" />
    )
  }

  componentDidMount() {
    this.props.getUserPosition();
  }

}

