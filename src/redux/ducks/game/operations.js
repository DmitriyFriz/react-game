import * as actions from './actions';
import * as selectors from './selectors';
import * as utils from './utils';

export const startNewGame = (size) => (dispatch, getState) => {
  const { puzzle, emptyIndex } = utils.getNewPuzzle(size);
  dispatch(actions.updateGame({ size, puzzle, emptyIndex, clickNumber: 0 }));
};

export const clickOnCard = (index) => (dispatch, getState) => {
  const puzzle = selectors.getPuzzle(getState());
  const emptyIndex = selectors.getEmptyIndex(getState());

  const { moved, newPuzzle } = utils.moveCard({ puzzle, index, emptyIndex });
  if (moved) {
    const size = selectors.getSize(getState());
    dispatch(actions.moveCard(newPuzzle));
    console.log('win', utils.checkWin(newPuzzle, size));
  }
};

export const clickOnKey = (key) => (dispatch, getState) => {
  const emptyIndex = selectors.getEmptyIndex(getState());
  const puzzle = selectors.getPuzzle(getState());

  const index = utils.getIndexCardByKey({ key, puzzle, emptyIndex });

  if (index < 0) return;

  const { moved, newPuzzle } = utils.moveCard({ puzzle, index, emptyIndex });
  if (moved) {
    dispatch(actions.moveCard(newPuzzle));
  }
};
