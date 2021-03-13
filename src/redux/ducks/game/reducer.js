import * as types from './types';

const initialState = {
  size: 4,
  puzzle: [],
  emptyIndex: 0,
  clickNumber: 0,
  status: 'start',
};

const reducer = (state = initialState, action) => {
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
