import React from 'react'
import { connect } from 'react-redux'
import Bird from '../components/bird.jsx'

const mapStateToProps = (state) => {
  return {
    bird: state.bird,
    isVisible: state.game.isPlaying || state.game.isEnded,
    gameEnded: state.game.isEnded
  }
}

export default connect(
  mapStateToProps
)(Bird);
