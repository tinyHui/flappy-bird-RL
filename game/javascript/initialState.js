export default {
  game: {
    isPlaying: true,
    score: 0,
  },
  bird: {
    isFlying: true,
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
    moveOffset: 0,
    speed: 1,
    xRange: {
      min: 0,
      max: 340
    },
    yWide: 296,
    top: {
      offset: 60,
      yRange: {
        min: 60,
        max: 242
      }
    }
  },
  world: {
    skyRange: {
      min: 0,
      max: 368
    },
    flyRange: {
      min: 0,
      max: 428
    },
    dropDuration: 1400,
    climbDuration: 140
  }
}
