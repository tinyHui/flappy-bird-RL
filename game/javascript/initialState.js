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
    maxRotate: 40,
    minRotate: -40,
    climbHeight: 60,
    timestamp: 0
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
