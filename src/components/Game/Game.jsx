import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReloadOutlined } from '@ant-design/icons';

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
      <div className={s.top_container}>
        <ReloadOutlined className={s.refresh} onClick={() => handleClick()} />
        <p>Steps: {clickNumber}</p>
      </div>
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
