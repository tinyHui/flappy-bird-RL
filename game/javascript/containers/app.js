import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app.jsx'
import { flyUp, startGame, stopGame } from '../actions'

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    triggerFly: () => {
      dispatch(flyUp())
    },
    startGame: () => {
      dispatch(startGame())
    },
    stopGame: () => {
      dispatch(stopGame())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
