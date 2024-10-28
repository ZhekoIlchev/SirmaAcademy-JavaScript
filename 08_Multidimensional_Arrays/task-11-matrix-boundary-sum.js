function solve(input) {
  let matrix = parseMatrix(input);

  let sum = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    sum += matrix[0][i] + matrix[matrix.length - 1][i];
  }

  for (let i = 1; i < matrix.length - 1; i++) {
    sum += matrix[i][0] + matrix[i][matrix[i].length - 1];
  }
  console.log(sum);
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
solve(["1 2 3 0", "4 5 6 7", "0 8 9 1"]);