import * as types from './types';

export const updateGame = (data) => ({
  type: types.UPDATE_GAME,
  payload: {
    data,
  },
});

export const moveCard = (puzzle) => ({
  type: types.MOVE_CARD,
  payload: {
    puzzle,
  },
});

export const changeWinStatus = (status) => ({
  type: types.CHANGE_WIN_STATUS,
  payload: {
    status,
  },
});

export const changeGameStatus = (status) => ({
  type: types.CHANGE_GAME_STATUS,
  payload: {
    status,
  },
});
