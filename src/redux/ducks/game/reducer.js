import * as types from './types';
import * as utils from './utils';

const initialState = {
  size: 4,
  puzzle: [],
  emptyIndex: 0,
  clickNumber: 7,
  gameStatus: false,
  winStatus: false,
};

const reducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case types.UPDATE_GAME:
      return {
        ...state,
        ...action.payload.data,
      };

    case types.MOVE_CARD:
      return {
        ...state,
        puzzle: action.payload.puzzle,
        clickNumber: state.clickNumber + 1,
      };

    case types.CHANGE_GAME_STATUS:
      return {
        ...state,
        gameStatus: action.payload.status,
      };

    case types.CHANGE_WIN_STATUS: {
      return {
        ...state,
        winStatus: action.payload.status,
      };
    }

    default:
      return state;
  }
};

export default reducer;
