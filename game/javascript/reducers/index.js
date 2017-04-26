import { combineReducers } from 'redux'
import initState from '../initialState'
import game from './game'
import bird from './bird'

export default combineReducers({
  game,
  bird
})
