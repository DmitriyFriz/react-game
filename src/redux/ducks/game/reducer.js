import * as types from './types';
import * as utils from './utils';

const initialState = {
  size: 4,
  puzzle: [],
  emptyIndex: 0,
  clickNumber: 7,
  status: 'start',
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

    case types.CHANGE_STATUS:
      return {
        ...state,
        status: action.payload.status,
      };

    default:
      return state;
  }
};

export default reducer;
