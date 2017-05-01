import { combineReducers } from 'redux'
import game from './game'
import bird from './bird'
import pipePairs from './pipePairs'

export default combineReducers({
  game,
  bird,
  pipePairs
})
