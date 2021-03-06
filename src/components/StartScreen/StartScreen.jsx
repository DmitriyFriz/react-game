import React from 'react';
import { useDispatch } from 'react-redux';

import { operations } from '../../redux/ducks/game';
import s from './StartScreen.module.scss';
import ButtonContainer from '../ButtonContainer';

const StartScreen = () => {
  const dispatch = useDispatch();

  const handleClick = (size) => {
    dispatch(operations.startNewGame(size));
  };

  return (
    <div className={s.start}>
      <p>Select size</p>
      <ButtonContainer
        onclick={handleClick}
        buttonClassName={s.button}
        containerClassName={s.button_container}
      />
      <p>Use ← ↑ → ↓ keys or mouse to move cards</p>
    </div>
  );
};

export default StartScreen;
