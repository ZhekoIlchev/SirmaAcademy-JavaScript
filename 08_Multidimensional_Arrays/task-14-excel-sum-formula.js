function solve(matrix, bound) {
  let bounds = bound.split(":");
  let sum = 0;

  let sColumn = String(bounds[0]).charCodeAt(0) - 65;
  let eColumn = String(bounds[1]).charCodeAt(0) - 65;
  let sRow = Number(String(bounds[0]).charAt(1));
  let eRow = Number(String(bounds[1]).charAt(1));

  for (let row = sRow - 1; row < eRow; row++) {
    for (let column = sColumn; column <= eColumn; column++) {
      sum += matrix[row][column];
    }
  }

  console.log(sum);
}

solve(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  "A1:C2"
);

solve(
  [
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
  ],
  "A1:B4"
);

solve(
  [
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  "A1:C4"
);