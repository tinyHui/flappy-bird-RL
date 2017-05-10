import initState from '../initialState'
import { START, FLY_UP, PLAYING, STOP, SCORE_UP } from '../actions'

const world = initState.world;
let dropping = false;
let dropStartHeight = 0;

export default (state = { }, action) => {
  const { currentHeight, currentRotate } = state;

  switch (action.type) {
    case START:
      return Object.assign({}, initState.bird, {
        dropStartTimestamp: Date.now(),
        remainClimbPower: 0
      });

    case FLY_UP:
      dropping = false;
      return Object.assign({}, state, {
        remainClimbPower: initState.bird.climbPower
      });

    case PLAYING:
      let result = {
        remainClimbPower: state.remainClimbPower || 0,
        currentHeight: state.currentHeight,
        dropStartTimestamp: state.dropStartTimestamp
      }

      if (result.remainClimbPower > 0) {
        climb(state, result);
      } else {
        drop(state, result);
      }

      return Object.assign({}, state, result);

    case STOP:
      result = {
        remainClimbPower: state.remainClimbPower || 0,
        currentHeight: state.currentHeight,
        dropStartTimestamp: state.dropStartTimestamp
      }

      state.currentRotate = initState.bird.headDownAngle;

      if (result.remainClimbPower > 0) {
        climb(state, result);
      } else {
        drop(state, result);
      }
      return Object.assign({}, state, result);


    case SCORE_UP:
      return Object.assign({}, state);

    default:
      return Object.assign({}, initState.bird);
  }
}

function climb(state, result) {
  result.remainClimbPower -= world.gravity;
  result.currentHeight += result.remainClimbPower * state.climbHeighPerPower;
  state.currentRotate = initState.bird.headUpAngle;
  result.dropStartHeight = state.currentHeight;
  dropping = false;
}

function drop(state, result) {
  if (state.currentHeight <= 0) {
    return
  }
  // drop
  if (!dropping) {
    dropping = true;
    result.dropStartTimestamp = Date.now();
    result.dropStartHeight = state.currentHeight;
  }
  const dropTimeDelta = (Date.now() - state.dropStartTimestamp) / 1000;
  const dropHeightDelta = state.dropStartHeight - state.currentHeight;
  result.currentHeight -= world.gravity * Math.pow(dropTimeDelta, 2) + 2;
  if (dropHeightDelta > 66) {
    state.currentRotate = initState.bird.headDownAngle
  }
}
