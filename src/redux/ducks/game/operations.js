import * as actions from './actions';
import * as selectors from './selectors';
import * as utils from './utils';

// export const { startNewGame } = actions;

export const startNewGame = (size) => (dispatch, getState) => {
  const { puzzle, emptyIndex } = utils.getNewPuzzle(size);
  dispatch(actions.updateGame({ size, puzzle, emptyIndex, clickNumber: 0 }));
};

export const clickOnCard = (index) => (dispatch, getState) => {
  const puzzle = selectors.getPuzzle(getState());
  const emptyIndex = selectors.getEmptyIndex(getState());

  const { moved, newPuzzle } = utils.moveCard(puzzle, index, emptyIndex);
  if (moved) {
    dispatch(actions.moveCard(newPuzzle));
  }
};
