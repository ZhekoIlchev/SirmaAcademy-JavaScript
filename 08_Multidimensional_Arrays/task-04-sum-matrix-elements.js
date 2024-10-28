function solve(matrix) {
  let rows = matrix.length;
  let columns = matrix[0].length;

  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }

  console.log(rows);
  console.log(columns);
  console.log(sum);
}

solve([
  [7, 1, 3, 3, 2, 1],
  [1, 3, 9, 8, 5, 6],
  [4, 6, 7, 9, 1, 0],
]);

console.log("---");

solve([
  [10, 11, 12, 13],
  [14, 15, 16, 17],
]);