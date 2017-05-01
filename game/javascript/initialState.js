export default {
  game: {
    isPlaying: true,
    score: 0,
  },
  bird: {
    isFlying: true,
    x: 45,
    startHeight: 188,
    startRotate: 0,
    currentHeight: 188,
    currentRotate: 0,
    targetHeight: 0,
    targetRotate: 40,
    maxRotate: 90,
    minRotate: -40,
    climbHeight: 80,
    timestamp: 0
  },
  pipePair: {
    timestamp: 0,
    moveOffset: 0,
    speed: 1,
    interval: 2800,
    gap: 68,
    top: {
      offset: 0,
      yRange: {
        min: 60,
        max: 242
      }
    },
    bottom: {
      offset: 0
    }
  },
  world: {
    skyRange: {
      min: 0,
      max: 368
    },
    xRange: {
      min: 0,
      max: 340
    },
    flyRange: {
      min: 0,
      max: 428
    },
    dropDuration: 1400,
    climbDuration: 140
  }
}
