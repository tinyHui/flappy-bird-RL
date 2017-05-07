import initState from '../initialState'
import { START, FLY_UP, PLAYING, STOP, SCORE_UP } from '../actions'

const world = initState.world;

export default (state = { }, action) => {
  const { currentHeight, targetHeight, currentRotate } = state;
  switch (action.type) {
    case START:
      return Object.assign({}, initState.bird, {
        timestamp: Date.now()
      });

    case FLY_UP:
      if (state.currentHeight < world.flyRange.max) {
        state.targetHeight = getClimbTarget(state);
      }

      return Object.assign({}, state, {
        targetRotate: state.minRotate,
        startHeight: state.currentHeight,
        timestamp: Date.now()
      });

    case PLAYING:
      const timeDelta = Date.now() - state.timestamp;

      if (currentHeight === targetHeight) {
        state.startHeight = currentHeight;
        state.targetHeight = world.skyRange.min;
        state.currentRotate = state.maxRotate;
        state.timestamp = Date.now();
      } else if (currentHeight < targetHeight) {
        climbUp(state, timeDelta);
      } else {
        dropDown(state, timeDelta);
      }

      return Object.assign({}, state);

    case STOP:
      dropDown(state, Date.now() - state.timestamp);
      return Object.assign({}, state);

    case SCORE_UP:
      return Object.assign({}, state);

    default:
      return Object.assign({}, initState.bird, {
        timestamp: Date.now()
      });
  }
}

function getClimbTarget(state) {
  if (state.currentHeight > state.targetHeight) {
    // still dropping
    return state.currentHeight + state.climbHeight;
  } else {
    return state.targetHeight += state.climbHeight;
  }
}

function climbUp(state, timeDelta) {
  let ratio = timeDelta / world.climbDuration;
  if (ratio > 1)  ratio = 1;
  state.currentHeight = state.startHeight + (state.targetHeight - state.startHeight) * ratio;
  state.currentRotate = state.startRotate + (state.targetRotate - state.startRotate) * ratio;
}

function dropDown(state, timeDelta) {
  if (state.currentHeight <= world.flyRange.min) {
    return
  }
  const heightDelta = timeDelta / world.dropDuration * (world.skyRange.max - world.skyRange.min);
  state.currentHeight = state.startHeight - heightDelta;
  state.currentRotate = state.maxRotate;
}
