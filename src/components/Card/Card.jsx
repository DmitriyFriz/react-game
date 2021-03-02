import React from 'react';

import './Card.scss';

const Card = ({ cardStyle, title, onClick }) => {
  return (
    <button className="card" style={cardStyle} onClick={onClick} type="button">
      {title}
    </button>
  );
};

export default Card;
