import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux/ducks/game';

import Board from '../Board';

const Game = () => {
  const clickNumber = useSelector(selectors.getClickNumber);

  return (
    <div>
      Click number: {clickNumber}
      <Board />
    </div>
  );
};

export default Game;
