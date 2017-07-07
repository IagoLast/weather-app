import React, { Component } from 'react'
import './temperature.css';

export default class Spinner extends Component {
  render() {
    return (
      <div className="Temperature">
        <div className="Wrapper">
          <span className="pulse"></span>
        </div>
        <div className="Wrapper">
          { this.props.tmp }º
        </div>
        <div className="Footer">
          <div className="Extra">
            <img alt="minimas" src="images/min.png" />
            <p>
              { this.props.min }º
            </p>
          </div>
          <div className="Extra">
            <img alt="maximas" src="images/max.png" />
            <p>
              { this.props.max }º
            </p>
          </div>
          <div className="Extra">
            <img alt="probabilidad de lluvia" src="images/rp.png" />
            <p>
              { this.props.rainProb }%</p>
          </div>
        </div>
      </div>
    )
  }
}
