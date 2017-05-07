import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app'
import game from './reducers'
import { playing, scoreUp, stopGame } from './actions'
import { isClash, secureThrough }  from './actions/clash'

const store = createStore(game);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('game')
);

function runningGame() {
  if (store.getState().game.isPlaying && !store.getState().game.isEnded) {
    if (isClash(store.getState())) {
      store.dispatch(stopGame());
    }
    if (secureThrough(store.getState())) {
      store.dispatch(scoreUp());
    }
    store.dispatch(playing())
  } else if (!store.getState().game.isPlaying && store.getState().game.isEnded) {
    store.dispatch(stopGame())
  }
  requestAnimationFrame(runningGame);
}

runningGame();
