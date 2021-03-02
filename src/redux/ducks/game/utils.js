const KEY = {
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
};

export const getNewPuzzle = (size) => {
  const orderedArr = new Array(size ** 2).fill().map((item, index) => index);
  const solvedArr = getSolved(shuffleArr(orderedArr));
  const emptyIndex = getEmptyIndex(solvedArr);
  const puzzle = solvedArr.map((item, index) => getNewCard(item, index, size));
  return { puzzle, emptyIndex };
};

const getNewCard = (item, index, size) => ({
  top: getRowPosition(index, size),
  left: getColumnPosition(index, size),
  value: item,
});

const getRowPosition = (index, size) => Math.floor(index / size);
const getColumnPosition = (index, size) => index % size;

const getEmptyIndex = (arr) =>
  arr.findIndex((item, index, currentArr) => item === currentArr.length - 1);

const checkSolved = (arr) => {
  const size = arr.length ** 0.5;
  const emptyIndex = getEmptyIndex(arr);

  const totalSum = arr.reduce((sum, item, index, currentArr) => {
    if (index === emptyIndex) {
      return sum;
    }

    const nextSum = currentArr.slice(index).reduce((currentSum, nextItem) => {
      return item > nextItem ? currentSum + 1 : currentSum;
    }, 0);

    return sum + nextSum;
  }, 0);

  const emptyRowPosition = getRowPosition(emptyIndex, size);

  return (totalSum + emptyRowPosition) % 2 !== size % 2;
};

const getSolved = (arr) => {
  const size = arr.length ** 0.5;

  if (checkSolved(arr, size)) {
    return arr;
  }

  const newArr = [...arr];

  const emptyIndex = getEmptyIndex(newArr);
  const newEmptyIndex = emptyIndex + size < arr.length - 1 ? emptyIndex + size : emptyIndex - size;

  const emptyItem = newArr.splice(emptyIndex, 1)[0];
  newArr.splice(newEmptyIndex, 0, emptyItem);

  return newArr;
};

const shuffleArr = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * newArr.length);
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
};

export const moveCard = ({ puzzle, index, emptyIndex }) => {
  const selectedCard = puzzle[index];
  const emptyCard = puzzle[emptyIndex];

  const moved = isMoved(selectedCard, emptyCard);

  if (moved) {
    const newSelectedCard = { ...selectedCard, top: emptyCard.top, left: emptyCard.left };
    const newEmptyCard = { ...emptyCard, top: selectedCard.top, left: selectedCard.left };

    const newPuzzle = [...puzzle];
    newPuzzle.splice(index, 1, newSelectedCard);
    newPuzzle.splice(emptyIndex, 1, newEmptyCard);

    return {
      newPuzzle,
      moved,
    };
  }

  return { moved };
};

const isMoved = (selectedCard, emptyCard) => {
  if (!selectedCard) return false;

  const topDiff = Math.abs(selectedCard.top - emptyCard.top);
  const leftDif = Math.abs(selectedCard.left - emptyCard.left);

  return topDiff + leftDif === 1;
};

export const getIndexCardByKey = ({ key, puzzle, emptyIndex }) => {
  const emptyCard = puzzle[emptyIndex];
  if (!emptyCard) return -1;

  let { top, left } = emptyCard;

  switch (key) {
    case KEY.ARROW_UP:
      top += 1;
      break;
    case KEY.ARROW_DOWN:
      top -= 1;
      break;
    case KEY.ARROW_LEFT:
      left += 1;
      break;
    case KEY.ARROW_RIGHT:
      left -= 1;
      break;
    default:
      return -1;
  }

  const index = puzzle.findIndex((card) => card.top === top && card.left === left);

  return index;
};

export const checkWin = (puzzle, size) => {
  return puzzle.every((card) => card.top * size + card.left === card.value);
};

const testArr = [0, 1, 2, 3, 4, 5, 6, 8, 7, 9];
console.log(checkSolved(testArr));
