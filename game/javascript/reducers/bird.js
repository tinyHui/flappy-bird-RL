import initState from '../initialState'
import { START, FLY_UP, PLAYING, STOP } from '../actions'

let bird = Object.assign(initState.bird, {
  timestamp: 0
});
const world = initState.world;

export default (state = { bird }, action) => {
  const { currentHeight, targetHeight, currentRotate } = bird;
  switch (action.type) {
    case START:
      bird.timestamp = Date.now();
      return Object.assign({}, bird);

    case FLY_UP:
      bird.targetRotate = bird.minRotate;
      bird.startHeight = bird.currentHeight;
      bird.timestamp = Date.now();

      if (bird.currentHeight < world.flyRange.max) {
        bird.targetHeight = getClimbTarget();
      }

      return bird;

    case PLAYING:
      const timeDelta = Date.now() - bird.timestamp;

      if (currentHeight === targetHeight) {
        bird.startHeight = currentHeight;
        bird.targetHeight = world.skyRange.min;
        bird.currentRotate = bird.maxRotate;
        bird.timestamp = Date.now();
      } else if (currentHeight < targetHeight) {
        climbUp(timeDelta);
      } else {
        dropDown(timeDelta);
      }

      return Object.assign({}, bird);

    case STOP:
      dropDown(Date.now() - bird.timestamp);
      return Object.assign({}, bird);

    default:
      return bird;
  }
}

function getClimbTarget() {
  if (bird.currentHeight > bird.targetHeight) {
    // still dropping
    return bird.currentHeight + bird.climbHeight;
  } else {
    return bird.targetHeight += bird.climbHeight;
  }
}

function climbUp(timeDelta) {
  let ratio = timeDelta / world.climbDuration;
  if (ratio > 1)  ratio = 1;
  bird.currentHeight = bird.startHeight + (bird.targetHeight - bird.startHeight) * ratio;
  bird.currentRotate = bird.startRotate + (bird.targetRotate - bird.startRotate) * ratio;
}

function dropDown(timeDelta) {
  if (bird.currentHeight <= world.flyRange.min) {
    return
  }
  const heightDelta = timeDelta / world.dropDuration * (world.skyRange.max - world.skyRange.min);
  bird.currentHeight = bird.startHeight - heightDelta;
  bird.currentRotate = bird.maxRotate;
}
