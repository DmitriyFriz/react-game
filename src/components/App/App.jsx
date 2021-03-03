import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { operations, selectors } from '../../redux/ducks/game';
import './App.scss';
import Header from '../Header';
import StartScreen from '../StartScreen';
import Game from '../Game';
import Footer from '../Footer';

const App = () => {
  const status = useSelector(selectors.getStatus);

  return (
    <div className="app-container">
      <Header />
      <main className="main-container">
        {status === 'start' && <StartScreen />}
        {status === 'game' && <Game />}
        {status === 'finish' && 'YOU WIN'}
      </main>
      <Footer />
    </div>
  );
};

export default App;
