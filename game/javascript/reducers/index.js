import { combineReducers } from 'redux'
import initState from '../initialState'
import game from './game'
import bird from './bird'
import pipePair from './pipePair'

export default combineReducers({
  game,
  bird,
  pipePair
})
