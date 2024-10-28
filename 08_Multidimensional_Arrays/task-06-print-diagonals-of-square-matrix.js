function printDiagonals(matrix) {
  let convertedMatrix = parseMatrix(matrix);
  let primaryDiagonal = getPrimaryDiagonal(convertedMatrix);
  let secondaryDiagonal = getSecondaryDiagonal(convertedMatrix);

  console.log(primaryDiagonal);
  console.log(secondaryDiagonal);
}

function getPrimaryDiagonal(matrix) {
    let row = 0;
    let column = 0;
    let diagonalValues = [];

    while(row < matrix.length && column < matrix[column].length) {
        diagonalValues.push(matrix[row++][column++]);
    }

    return diagonalValues.join(' ');
}

function getSecondaryDiagonal(matrix) {
    let row = matrix.length - 1;
    let diagonalValues = [];

    for (let column = 0; column < matrix[row].length; column++) {
            diagonalValues.push(matrix[row - column][column]);
    }

    return diagonalValues.join(' ');
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

printDiagonals(["1 2 3", "1 2 3", "1 2 3"]);

printDiagonals(["1 2 3 2", "1 1 2 4", "1 2 1 4", "2 2 3 1"]);
