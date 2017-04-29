import initState from '../initialState'
import { PLAYING } from '../actions'

let pipePair = initState.pipePair;

export default (state = { pipePair }, action) => {
  switch (action.type) {
    case PLAYING:
      slidingLeft();
      return Object.assign({}, pipePair);
    default:
      return pipePair;
  }
}

function slidingLeft() {
  if (pipePair.moveOffset > pipePair.xRange.max) {
    pipePair.moveOffset = pipePair.xRange.min;
    randomTopOffset();
  }
  pipePair.moveOffset += pipePair.speed;
}

function randomTopOffset() {
  const { min, max } = pipePair.top.yRange;
  const delta = max - min;
  pipePair.top.offset = min + Math.random() * delta;
}
