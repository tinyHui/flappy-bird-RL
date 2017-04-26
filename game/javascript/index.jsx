import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app.jsx'
import game from './reducers'
import { playing } from './actions'

const store = createStore(game);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('game')
);

function runningGame() {
  store.dispatch(playing())
  requestAnimationFrame(runningGame);
}

runningGame();
