import * as types from './types';
import * as utils from './utils';

const initialState = {
  size: 4,
  puzzle: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_NEW_GAME:
      return {
        ...state,
        size: action.payload.size,
        puzzle: utils.getNewPuzzle(action.payload.size),
      };

    default:
      return state;
  }
};

export default reducer;
