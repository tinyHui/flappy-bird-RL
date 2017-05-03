export const FLY_UP = 'FLY_UP';
export const PLAYING = 'PLAYING';
export const SCORE_UP = 'SCORE_UP';
export const START = 'START';

export function flyUp() {
  return {
    type: FLY_UP
  }
}

export function playing() {
  return {
    type: PLAYING
  }
}

export function scoreUp() {
  return {
    type: SCORE_UP
  }
}

export function startGame() {
  return {
    type: START
  }
}
