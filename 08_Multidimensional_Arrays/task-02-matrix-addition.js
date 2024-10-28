function solve(matrixA, matrixB) {
  let sumMatrix = [];
  for (let i = 0; i < matrixA.length; i++) {
    sumMatrix[i] = [];

    for (let j = 0; j < matrixA[i].length; j++) {
      sumMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }

  for (const element of sumMatrix) {
    console.log(element.join(" "));
  }
}

solve(
  [
    [1, 2],
    [3, 4],
  ],
  [
    [2, 2],
    [2, 2],
  ]
);

console.log("------");

solve(
  [
    [1, 2, 3],
    [4, 3, 1],
  ],
  [
    [1, 2, 3],
    [4, 2, 2],
  ]
);