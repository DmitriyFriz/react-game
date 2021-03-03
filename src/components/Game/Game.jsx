import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, operations } from '../../redux/ducks/game';

import Board from '../Board';
import ButtonContainer from '../ButtonContainer';
import s from './Game.module.scss';

const Game = () => {
  const clickNumber = useSelector(selectors.getClickNumber);
  const dispatch = useDispatch();

  const handleClick = (size) => {
    dispatch(operations.startNewGame(size));
  };

  return (
    <div className={s.game}>
      <p>Amount of steps: {clickNumber}</p>
      <Board />
      <ButtonContainer
        onclick={handleClick}
        buttonClassName={s.button}
        containerClassName={s.button_container}
      />
    </div>
  );
};

export default Game;
