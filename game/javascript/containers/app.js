import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app.jsx'
import { flyUp } from '../actions'

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    triggerFly: () => {
      dispatch(flyUp())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);