import * as types from './types';

const initialState = {
  puzzle: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_NEW_GAME:
      return {
        ...state,
        puzzle: new Array(action.payload.size).fill(10),
      };

    default:
      return state;
  }
};

export default reducer;
