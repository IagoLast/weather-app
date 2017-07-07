import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux';

import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav>
          <img onClick={ this.props.onClick } width="18px" height="18px" style={ { marginRight: '10px' } } src="images/search.png" alt="Buscar" />
          <p onClick={ this.props.onClick }>
            { this.props.name }
          </p>
        </nav>
        { this.getDay(this.props.index) }
      </header>
    )
  }

  getDay(index) {
    if (index === 0) {
      return <div className="day"> HOXE </div>
    }
    if (index === 1) {
      return <div className="day">MAÑA</div>
    }
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(push('/search'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
