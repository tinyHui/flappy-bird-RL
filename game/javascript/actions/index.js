export const FLY_UP = 'FLY_UP';
export const PLAYING = 'PLAYING';

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
