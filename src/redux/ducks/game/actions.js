import * as types from './types';

export const startNewGame = (size) => ({
  type: types.START_NEW_GAME,
  payload: {
    size,
  },
});

export const clickOnCard = (index) => ({
  type: types.CLICK_ON_CARD,
  payload: {
    index,
  },
});
