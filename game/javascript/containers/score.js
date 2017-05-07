import React from 'react'
import { connect } from 'react-redux'
import Score from '../components/score.jsx'
import { scoreUp } from '../actions'

const mapStateToProps = (state) => {
  return {
    score: state.game.score,
    isVisible: state.game.isPlaying || state.game.isEnded
  }
}

export default connect(
  mapStateToProps
)(Score);
