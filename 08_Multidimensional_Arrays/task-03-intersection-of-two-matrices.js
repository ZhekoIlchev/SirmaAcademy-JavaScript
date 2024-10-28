function solve(matrix1, matrix2) {
  let matrixA = parseMatrix(matrix1);
  let matrixB = parseMatrix(matrix2);
  let matrixC = [];

  for (let i = 0; i < matrixA.length; i++) {
    matrixC[i] = [];

    for (let j = 0; j < matrixB[i].length; j++) {
      if (matrixA[i][j] === matrixB[i][j]) {
        matrixC[i][j] = matrixA[i][j];
      } else {
        matrixC[i][j] = "*";
      }
    }
  }

  printMatrix(matrixC);
}

function parseMatrix(matrix) {
  let parsedMatrix = [];
  let row = 0;

  for (const element of matrix) {
    let arr = element.split(" ");
    parsedMatrix[row++] = arr;
  }

  return parsedMatrix;
}

function printMatrix(matrix) {
  for (const row of matrix) {
    console.log(row.join(" "));
  }
}

solve(["a b c d", "a b c d", "a b c d"], ["k b c k", "a b g d", "a k c d"]);
console.log('---');
solve(["1 2", "3 4", "5 6", "7 8", "9 1"], ["0 2", "3 1", "1 6", "7 4", "1 1"]);