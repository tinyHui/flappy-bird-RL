import initState from '../initialState'

const landHeight = initState.world.landHeight,
      skyWidth = initState.world.canvas.width,
      birdWidth = initState.bird.width,
      birdHeight = initState.bird.height,
      pipeWidth = initState.pipePair.width;

function getState(state) {
  const { bird, pipePairs } = state;

  const detectRange = {
    min: bird.x,
    max: bird.x + birdWidth
  }

  let pipePair = getAffectPipePair(pipePairs, bird.x);

  return {
    bird: {
      x: bird.x,
      y: bird.currentHeight
    },
    pipe: {
      x: getPipePairLeft(pipePair),
      topY: landHeight - pipePair.top,
      bottomY: pipePair.bottom
    },
    detectRange: detectRange
  }
}

function getPipePairLeft(pipePair) {
  return skyWidth - pipePair.moveOffset;
}

function getAffectPipePair(pipePairs, birdX) {
  for (let p of pipePairs) {
    if (getPipePairLeft(p) + birdWidth >= birdX) {
      return p;
    }
  }
}

function sameX(birdX, pipeX) {
  return birdX < pipeX + pipeWidth && birdX + birdWidth > pipeX;
}

function inSafeRange(birdY, pipeTopY, pipeBottomY) {
  return birdY >= pipeBottomY && birdY + birdHeight <= pipeTopY;
}

export function isClash(state) {
  const { bird, pipe, detectRange } = getState(state);

  if (bird.y <= 0) {
    return true;
  }

  if (sameX(bird.x, pipe.x)) {
    if (!inSafeRange(bird.y, pipe.topY, pipe.bottomY)) {
      return true;
    }
  }

  return false;
}

export function secureThrough(state) {
  const { bird, pipe } = getState(state);
  if (bird.x === pipe.x) {
    if (inSafeRange(bird.y, pipe.topY, pipe.bottomY)) {
      return true;
    }
  }
  return false;
}
