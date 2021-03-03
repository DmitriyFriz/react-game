import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { operations, selectors } from '../../redux/ducks/game';
import './App.scss';
import Game from '../Game';

const App = () => {
  const [visibleGame, setVisibleGame] = useState(true);
  const dispatch = useDispatch();

  const gameStatus = useSelector(selectors.getGameStatus);
  const winStatus = useSelector(selectors.getWinStatus);
  // const allState = useSelector((state) => state.game);

  // console.log(allState);

  return (
    <div className="app-container">
      <button type="button" onClick={() => setVisibleGame((s) => !s)}>
        Change
      </button>
      <button type="button" onClick={() => dispatch(operations.startNewGame(2))}>
        Start game
      </button>
      {visibleGame && gameStatus && <Game />}
      {winStatus && 'YOU WIN'}
    </div>
  );
};

export default App;
