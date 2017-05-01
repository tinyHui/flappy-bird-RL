import initState from '../initialState'
import { PLAYING, FLY_UP, SCORE_UP } from '../actions'

const heightRange = initState.world.skyRange.max,
      widthRange = initState.world.xRange.max,
      generateInterval = initState.pipePair.interval,
      moveSpeed = initState.pipePair.speed;

const gap = initState.pipePair.gap,
      topOffsetMax = initState.pipePair.top.yRange.max,
      topOffsetMin = initState.pipePair.top.yRange.min;

let pipePairs = [Object.assign({
  timestamp: Date.now(),
  moveOffset: initState.pipePair.moveOffset
}, randomVerticalOffset())];

export default (state = { pipePairs }, action) => {
  switch (action.type) {
    case PLAYING:
      let newPipePairs = slidingLeft(state);
      return getPipeInScene(newPipePairs);

    case SCORE_UP:
    case FLY_UP:
      return state;

    default:
      return pipePairs;
  }
}

function slidingLeft(pairs) {
  return pairs.map((pair) => {
    return {
      timestamp: pair.timestamp,
      moveOffset: pair.moveOffset + moveSpeed,
      top: pair.top,
      bottom: pair.bottom
    }
  });
}

function getPipeInScene(pairs) {
  pairs = filterInScene(pairs);
  return appendNewPipe(pairs);
}

function filterInScene(pairs) {
  return pairs.filter((pair) => {
    return pair.moveOffset < widthRange;
  });
}

function appendNewPipe(pairs) {
  const lastTimestamp = pairs[pairs.length-1].timestamp;
  const currentTimestamp = Date.now();

  if (currentTimestamp - lastTimestamp > generateInterval) {
    pairs.push(Object.assign({
      timestamp: currentTimestamp,
      moveOffset: 0
    }, randomVerticalOffset()));
  }
  return pairs;
}

function randomVerticalOffset() {
  let offset = {
    top: 0,
    bottom: 0
  }

  offset.top = Math.random() * (topOffsetMax - topOffsetMin) + topOffsetMin;
  offset.bottom = heightRange - offset.top - gap;

  return offset;
}
