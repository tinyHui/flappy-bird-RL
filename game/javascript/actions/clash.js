import initState from '../initialState'

const skyHeight = initState.world.skyRange.max,
      skyWidth = initState.world.xRange.max,
      pipeWidth = initState.pipePair.width;

function getState(state) {
  const { bird, pipePairs } = state;
  // console.log(skyWidth, pipePairs[0].moveOffset, pipeWidth, skyWidth - pipePairs[0].moveOffset - pipeWidth, bird.x)
  return {
    bird: {
      x: bird.x,
      y: bird.currentHeight
    },
    pipe: {
      x: skyWidth - pipePairs[0].moveOffset - pipeWidth,
      topY: pipePairs[0].top,
      bottomY: pipePairs[0].bottom
    },
    detectRange: {
      min: bird.x - pipeWidth,
      max: bird.x
    },
    safeRange: {
      min: pipePairs[0].bottom,
      max: skyHeight - pipePairs[0].top
    }
  }
}

export function isClash(state) {
  const { bird, pipe, detectRange, safeRange } = getState(state);
  if (bird.y <= 0) {
    return true;
  }
  if (detectRange.max > pipe.x && pipe.x > detectRange.min) {
    if (bird.y < safeRange.min || bird.y > safeRange.max) {
      return true;
    }
  }

  return false;
}

export function secureThrough(state) {
  const { bird, pipe, safeRange } = getState(state);
  if (bird.x === pipe.x) {
      if (bird.y > safeRange.min && bird.y < safeRange.max) {
        return true;
      }
  }
  return false;
}
