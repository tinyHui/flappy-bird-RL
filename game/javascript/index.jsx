import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app'
import game from './reducers'
import { playing, stopGame } from './actions'

const store = createStore(game);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('game')
);

function runningGame() {
  if (store.getState().game.isPlaying) {
    if (store.getState().game.isEnded) {
      store.dispatch(stopGame())
    } else {
      store.dispatch(playing())
    }
  }
  requestAnimationFrame(runningGame);
}

runningGame();
