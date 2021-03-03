import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { operations, selectors } from '../../redux/ducks/game';
import s from './FinishScreen.module.scss';
import ButtonContainer from '../ButtonContainer';

// image
import cup from '../../assets/img/cup.svg';

const FinishScreen = () => {
  const dispatch = useDispatch();
  const clickNumber = useSelector(selectors.getClickNumber);

  const handleClick = (size) => {
    dispatch(operations.startNewGame(size));
  };

  return (
    <div className={s.finish}>
      <p className={s.congratulation}>Congratulation!</p>
      <p>You made {clickNumber} steps</p>
      <img className={s.cup} src={cup} alt="cup" />
      <ButtonContainer
        onclick={handleClick}
        buttonClassName={s.button}
        containerClassName={s.button_container}
      />
    </div>
  );
};

export default FinishScreen;
