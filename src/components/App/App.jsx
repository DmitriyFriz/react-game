import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { operations, selectors } from '../../redux/ducks/game';

const App = ({ phrase }) => {
  const dispatch = useDispatch();
  dispatch(operations.startNewGame(3));

  const allState = useSelector((state) => state);
  const puzzle = useSelector(selectors.getPuzzle);

  console.log(allState);
  console.log(puzzle);

  return <div>{phrase}</div>;
};

export default App;
