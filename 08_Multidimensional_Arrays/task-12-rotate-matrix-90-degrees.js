function solve(input) {
  let matrix = parseMatrix(input);
  let matrixElements = [];
  let index = 0;

  for (let column = 0; column < matrix.length; column++) {
    for (let row = matrix.length - 1; row >= 0; row--) {
      matrixElements.push(matrix[row][column]);
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      matrix[row][column] = matrixElements[index++];
    }
  }

  for (const row of matrix) {
    console.log(row.join(" "));
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

solve(["1 2 3", "4 5 6", "7 8 9"]);
console.log("---");
solve(["0 1 2 3", "4 5 6 7", "8 9 10 11", "12 13 14 15"]);