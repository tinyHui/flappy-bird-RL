import initState from '../initialState'

let gameState = initState.game;
export default (state = { }, action) => {
  switch (action.type) {
    default:
      return gameState;
  }
}
