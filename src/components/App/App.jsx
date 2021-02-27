import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { operations, selectors } from '../../redux/ducks/game';
import { getPuzzle } from '../../redux/ducks/game/selectors';

const App = ({ phrase }) => {
  const dispatch = useDispatch();
  dispatch(operations.startNewGame(4));

  const allState = useSelector((state) => state);
  const puzzle = useSelector(getPuzzle);

  console.log(allState);
  console.log(puzzle);

  return <div>{phrase}</div>;
};

export default App;
