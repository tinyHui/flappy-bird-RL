import initState from '../initialState'

let gameState = initState.game;
export default (state = { gameState }, action) => {
  switch (action.type) {
    default:
      return gameState;
  }
}
