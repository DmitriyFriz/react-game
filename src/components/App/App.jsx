import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { operations, selectors } from '../../redux/ducks/game';
import './App.scss';
import Game from '../Game';

const App = ({ phrase }) => {
  const [adjective, setAdjective] = useState('good');
  const dispatch = useDispatch();

  // const allState = useSelector((state) => state);
  // const puzzle = useSelector(selectors.getPuzzle);

  // console.log(allState);
  // console.log(puzzle);

  return (
    <div className="app-container">
      <div>{phrase}</div>
      <div>{adjective}</div>
      <button type="button" onClick={() => setAdjective('beautiful')}>
        Change
      </button>
      <button type="button" onClick={() => dispatch(operations.startNewGame(3))}>
        Start game
      </button>
      <Game />
    </div>
  );
};

export default App;
