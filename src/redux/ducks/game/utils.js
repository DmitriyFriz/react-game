export const getNewPuzzle = (size) => {
  return new Array(size ** 2).fill().map((item, index) => getNewCard(index, size));
};

const getNewCard = (index, size) => ({
  top: getRowPosition(index, size),
  left: getColumnPosition(index, size),
  value: index + 1,
});

const getRowPosition = (index, size) => Math.floor(index / size);
const getColumnPosition = (index, size) => index % size;

const getEmptyIndex = (arr) =>
  arr.findIndex((item, index, currentArr) => item === currentArr.length - 1);

const checkSolved = (arr, size) => {
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

  return !!((totalSum + emptyRowPosition) % 2);
};

const getSolved = (arr, size) => {
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

const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(checkSolved(testArr, 4));
const newTestArr = getSolved(testArr, 4);
console.log(checkSolved(newTestArr, 4));
