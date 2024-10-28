function solve(input) {
  let matrix = parseMatrix(input);
  let isMagic = true;
  let sum = matrix[0].reduce((a, b) => a + b, 0);

  for (let element of matrix) {
    let rowSum = element.reduce((a, b) => a + b, 0);

    if (rowSum !== sum) {
      isMagic = false;
      break;
    }
  }

  for (let column = 0; column < matrix.length; column++) {
    let columnSum = 0;
    for (let row = 0; row < matrix.length; row++) {
      columnSum += matrix[row][column];
    }

    if (columnSum !== sum) {
      isMagic = false;
      break;
    }
  }

  let primaryDiagonalSum = getPrimaryDiagonal(matrix).reduce(
    (a, b) => a + b,
    0
  );
  if (primaryDiagonalSum !== sum) {
    isMagic = false;
  }

  let secondaryDiagonalSum = getSecondaryDiagonal(matrix).reduce(
    (a, b) => a + b,
    0
  );
  if (secondaryDiagonalSum !== sum) {
    isMagic = false;
  }

  if (isMagic) {
    console.log("True");
  } else {
    console.log("False");
  }
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

solve(["1 2 3", "4 5 6", "7 8 9"]);
solve(["1 0 0 0", "0 0 0 1", "0 1 0 0", "0 0 1 0"]);
solve(["8 1 6", "3 5 7", "4 9 2"]);