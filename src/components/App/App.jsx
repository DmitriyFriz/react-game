import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { operations, selectors } from '../../redux/ducks/game';
import './App.scss';
import Game from '../Game';

const App = () => {
  const [visibleGame, setVisibleGame] = useState(true);
  const dispatch = useDispatch();

  const puzzle = useSelector(selectors.getPuzzle);
  // const allState = useSelector((state) => state.game);

  // console.log(allState);
  console.log(puzzle);

  return (
    <div className="app-container">
      <button type="button" onClick={() => setVisibleGame((s) => !s)}>
        Change
      </button>
      <button type="button" onClick={() => dispatch(operations.startNewGame(3))}>
        Start game
      </button>
      {visibleGame && <Game />}
    </div>
  );
};

export default App;
