import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from '../../redux/ducks/game';

import './Board.scss';
import Card from '../Card';

const Board = () => {
  const puzzle = useSelector(selectors.getPuzzle);
  const size = useSelector(selectors.getSize);
  const emptyIndex = useSelector(selectors.getEmptyIndex);

  const dispatch = useDispatch();

  // console.log(puzzle, size, emptyIndex);

  const cards = puzzle.map((card, index) => {
    const { top, left, value } = card;

    const sizeCard = `${100 / size}%`;
    const topCard = `${(100 / size) * top}%`;
    const leftCard = `${(100 / size) * left}%`;
    const title = value + 1;

    const cardStyle = {
      width: sizeCard,
      height: sizeCard,
      top: topCard,
      left: leftCard,
    };

    if (index === emptyIndex) {
      cardStyle.zIndex = -100;
    }

    return (
      <Card
        key={value}
        cardStyle={cardStyle}
        title={title}
        onClick={() => dispatch(operations.clickOnCard(index))}
      />
    );
  });

  return <div className="board">{cards}</div>;
};

export default Board;
