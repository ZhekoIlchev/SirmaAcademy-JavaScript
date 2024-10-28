function solve(input) {
  let matrix = parseMatrix(input);
  let indexes = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (matrix[row][column] === 0) {
        indexes.push(row);
        indexes.push(column);
      }
    }
  }

  for (let i = 0; i < indexes.length - 1; i += 2) {
    let row = indexes[i];
    let column = indexes[i + 1];

    for (let j = 0; j < matrix[row].length; j++) {
      matrix[row][j] = 0;
    }

    for (let k = 0; k < matrix.length; k++) {
      matrix[k][column] = 0;
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

solve(["1 2 3", "4 0 6", "7 8 9"]);
console.log("---");
solve(["1 2 3 0", "4 5 6 7", "0 8 9 1"]);