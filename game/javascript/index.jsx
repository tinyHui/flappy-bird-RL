import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app'
import game from './reducers'
import { flyUp, playing, startGame, scoreUp, stopGame } from './actions'
import { isClash, secureThrough }  from './actions/clash'

const store = createStore(game);

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <button onClick={start}>Start Game</button>
    <button onClick={climbUp}>Climb Up</button>
  </div>,
  document.getElementById('game')
);

function nextFrame() {
  if (store.getState().game.isPlaying && !store.getState().game.isEnded) {
    if (isClash(store.getState())) {
      store.dispatch(stopGame());
    }
    if (secureThrough(store.getState())) {
      store.dispatch(scoreUp());
      store.dispatch(playing());
    } else {
      store.dispatch(playing());
    }
  } else if (!store.getState().game.isPlaying && store.getState().game.isEnded) {
    store.dispatch(stopGame());
  }
  requestAnimationFrame(nextFrame);
}

function climbUp() {
  if (store.getState().game.isPlaying) {
    store.dispatch(flyUp());
  }
}

function start() {
  if (!store.getState().game.isPlaying) {
    store.dispatch(startGame());
  }
}

nextFrame();
