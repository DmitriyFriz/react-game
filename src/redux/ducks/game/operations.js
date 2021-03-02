import * as actions from './actions';

export const { startNewGame } = actions;
export const clickOnCard = (index) => (dispatch, getState) => {
  dispatch(actions.clickOnCard(index));
};
