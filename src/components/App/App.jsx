import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { operations, selectors } from '../../redux/ducks/game';
import './App.scss';
import Header from '../Header';
import Game from '../Game';
import Footer from '../Footer';

const App = () => {
  const [visibleGame, setVisibleGame] = useState(true);
  const dispatch = useDispatch();

  const gameStatus = useSelector(selectors.getGameStatus);
  const winStatus = useSelector(selectors.getWinStatus);
  // const allState = useSelector((state) => state.game);

  // console.log(allState);

  return (
    <div className="app-container">
      <Header />
      <main className="main-container">
        <button type="button" onClick={() => setVisibleGame((s) => !s)}>
          Change
        </button>
        <button type="button" onClick={() => dispatch(operations.startNewGame(2))}>
          Start game
        </button>
        {visibleGame && gameStatus && <Game />}
        {winStatus && 'YOU WIN'}
      </main>
      <Footer />
    </div>
  );
};

export default App;
