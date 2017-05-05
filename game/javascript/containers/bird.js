import React from 'react'
import { connect } from 'react-redux'
import Bird from '../components/bird.jsx'

const mapStateToProps = (state, ownState) => {
  return {
    bird: state.bird,
    isVisible: ownState.isVisible,
    gameEnded: state.game.isEnded
  }
}

export default connect(
  mapStateToProps
)(Bird);
