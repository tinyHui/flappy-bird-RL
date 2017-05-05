import initState from '../initialState'
import { START, SCORE_UP, STOP } from '../actions'

let gameState = initState.game;

export default (state = gameState, action) => {
  switch (action.type) {
    case START:
      return Object.assign({}, state, {
        isPlaying: true
      });

    case SCORE_UP:
      return Object.assign(state, {
        score: state.score + 1
      });

    case STOP:
      return Object.assign({}, state, {
        isEnded: true
      });

    default:
      return state;
  }
}
