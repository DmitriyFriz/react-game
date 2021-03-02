import * as types from './types';
import * as utils from './utils';

const initialState = {
  size: 4,
  puzzle: [],
  emptyIndex: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_NEW_GAME: {
      const { puzzle, emptyIndex } = utils.getNewPuzzle(action.payload.size);
      return {
        ...state,
        size: action.payload.size,
        puzzle,
        emptyIndex,
      };
    }

    case types.CLICK_ON_CARD:
      console.log(action.payload.index);
      return state;

    default:
      return state;
  }
};

export default reducer;
