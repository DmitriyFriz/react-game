import React from 'react';
import Button from '../Button';

const ButtonContainer = ({ containerClassName, buttonClassName, onclick }) => {
  const sizes = [3, 4, 5, 6];

  const Buttons = sizes.map((item) => (
    <Button
      key={item}
      title={`${item}x${item}`}
      className={buttonClassName}
      onClick={() => onclick(item)}
    />
  ));

  return <div className={containerClassName}>{Buttons}</div>;
};

export default ButtonContainer;
