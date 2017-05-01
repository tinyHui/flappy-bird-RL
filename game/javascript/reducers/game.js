import initState from '../initialState'
import { SCORE_UP } from '../actions'

let gameState = initState.game;

export default (state = { gameState }, action) => {
  switch (action.type) {
    case SCORE_UP:
      return Object.assign(gameState, {
        score: gameState.score + 1
      });
    default:
      return gameState;
  }
}
