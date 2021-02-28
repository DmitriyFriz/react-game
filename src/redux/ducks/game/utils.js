export const getNewPuzzle = (size) => {
  return new Array(size ** 2).fill().map((item, index) => getNewCard(index, size));
};

const getNewCard = (index, size) => ({
  top: Math.floor(index / size),
  left: index % size,
  value: index + 1,
});

const checkSolved = (arr, size) => {
  const emptyIndex = arr.findIndex((item, index, currentArr) => item === currentArr.length);

  const totalSum = arr.reduce((sum, item, index, currentArr) => {
    if (index === emptyIndex) {
      return sum;
    }

    const nextSum = currentArr.slice(index).reduce((currentSum, nextItem) => {
      return item > nextItem ? currentSum + 1 : currentSum;
    }, 0);

    return sum + nextSum;
  }, 0);

  const rowNumber = Math.floor(emptyIndex / size) + 1;

  return !((totalSum + rowNumber) % 2);
};

const getSolved = (arr, size) => {
  if (checkSolved(arr, size)) {
    return arr;
  }

  const correctArr = [...arr];

  // [correctArr[0], correctArr[1]] = [correctArr[1], correctArr[0]]; don't work for first empty

  return correctArr;
};

const testArr = [16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(checkSolved(testArr, 4));
console.log(checkSolved(testArr, 4));
console.log(getSolved(testArr, 4));
