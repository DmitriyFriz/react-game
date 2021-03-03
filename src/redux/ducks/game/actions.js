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

export const changeStatus = (status) => ({
  type: types.CHANGE_STATUS,
  payload: {
    status,
  },
});
