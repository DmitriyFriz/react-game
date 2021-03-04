import React from 'react';
import { useSelector } from 'react-redux';

import { selectors } from '../../redux/ducks/game';
import './App.scss';
import Header from '../Header';
import StartScreen from '../StartScreen';
import Game from '../Game';
import FinishScreen from '../FinishScreen';
import Footer from '../Footer';

const App = () => {
  const status = useSelector(selectors.getStatus);

  return (
    <div className="app-container">
      <Header />
      <main className="main-container">
        {status === 'start' && <StartScreen />}
        {status === 'game' && <Game />}
        {status === 'finish' && <FinishScreen />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
