import * as actions from './actions';
import * as selectors from './selectors';
import * as utils from './utils';

export const startNewGame = (size) => (dispatch, getState) => {
  const { puzzle, emptyIndex } = utils.getNewPuzzle(size);
  dispatch(actions.updateGame({ size, puzzle, emptyIndex, clickNumber: 0 }));
  dispatch(actions.changeStatus('game'));
};

export const clickOnCard = (index) => (dispatch, getState) => {
  const puzzle = selectors.getPuzzle(getState());
  const emptyIndex = selectors.getEmptyIndex(getState());

  moveCard({ puzzle, index, emptyIndex })(dispatch, getState);
};

export const clickOnKey = (key) => (dispatch, getState) => {
  const emptyIndex = selectors.getEmptyIndex(getState());
  const puzzle = selectors.getPuzzle(getState());

  const index = utils.getIndexCardByKey({ key, puzzle, emptyIndex });

  if (index < 0) return;

  moveCard({ puzzle, index, emptyIndex })(dispatch, getState);
};

const moveCard = ({ puzzle, index, emptyIndex }) => (dispatch, getState) => {
  const { moved, newPuzzle } = utils.moveCard({ puzzle, index, emptyIndex });
  if (moved) {
    const size = selectors.getSize(getState());
    dispatch(actions.moveCard(newPuzzle));
    if (utils.checkWin(newPuzzle, size)) {
      setTimeout(() => {
        dispatch(actions.changeStatus('finish'));
      }, 1000);
    }
  }
};
