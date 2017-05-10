export default {
  game: {
    isPlaying: false,
    isEnded: false,
    score: 0
  },
  bird: {
    isFlying: true,
    x: 45,
    width: 34,
    height: 24,
    currentHeight: 188,
    currentRotate: 0,
    dropStartTimestamp: 0,
    climbPower: 15,
    climbHeighPerPower: 2.8,
    headUpAngle: -30,
    headDownAngle: 90
  },
  pipePair: {
    timestamp: 0,
    moveOffset: 0,
    speed: 1,
    interval: 2800,
    gap: 86,
    width: 52,
    top: {
      offset: 0,
      yRange: {
        min: 90,
        max: 270
      }
    },
    bottom: {
      offset: 0
    }
  },
  world: {
    skyRange: {
      min: 0,
      max: 400
    },
    xRange: {
      min: 0,
      max: 288
    },
    flyRange: {
      min: 0,
      max: 428
    },
    gravity: 4
  }
}
