function printDiagonalsSum(matrix) {
  let convertedMatrix = parseMatrix(matrix);
  let primaryDiagonal = getPrimaryDiagonal(convertedMatrix);
  let secondaryDiagonal = getSecondaryDiagonal(convertedMatrix);

  let primaryDiagonalSum = primaryDiagonal.reduce((a, b) => a + b, 0);
  let secondaryDiagonalSum = secondaryDiagonal.reduce((a, b) => a + b, 0);
  console.log(primaryDiagonalSum + secondaryDiagonalSum);
}

function getPrimaryDiagonal(matrix) {
  let row = 0;
  let column = 0;
  let diagonalValues = [];

  while (row < matrix.length && column < matrix[column].length) {
    diagonalValues.push(matrix[row++][column++]);
  }

  return diagonalValues;
}

function getSecondaryDiagonal(matrix) {
  let row = matrix.length - 1;
  let diagonalValues = [];

  for (let column = 0; column < matrix[row].length; column++) {
    diagonalValues.push(matrix[row - column][column]);
  }

  return diagonalValues;
}

function parseMatrix(matrix) {
  let parsedMatrix = [];
  let row = 0;

  for (const element of matrix) {
    let arr = element.split(" ").map((e) => Number(e));
    parsedMatrix[row++] = arr;
  }

  return parsedMatrix;
}

printDiagonalsSum(["1 2 3", "4 5 6", "7 8 9"]);
printDiagonalsSum(["10 11", "14 15"]);