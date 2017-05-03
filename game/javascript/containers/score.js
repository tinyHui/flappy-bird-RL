import React from 'react'
import { connect } from 'react-redux'
import Score from '../components/score.jsx'
import { scoreUp } from '../actions'

const mapStateToProps = (state, ownState) => {
  const leftPipeX = 290 - state.pipePairs[0].moveOffset;
  const birdX = state.bird.x;

  return {
    score: state.game.score,
    birdReachPipe: leftPipeX === birdX,
    isVisible: ownState.isVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    scoreUp: () => {
      setTimeout(function () {
        dispatch(scoreUp());
      }, 100);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Score);
