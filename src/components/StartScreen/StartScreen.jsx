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
    <div className={s.container}>
      <div>Select size</div>
      <ButtonContainer
        onclick={handleClick}
        buttonClassName={s.button}
        containerClassName={s.button_container}
      />
      <div>Use ← ↑ → ↓ keys or mouse to move cards</div>
    </div>
  );
};

export default StartScreen;
