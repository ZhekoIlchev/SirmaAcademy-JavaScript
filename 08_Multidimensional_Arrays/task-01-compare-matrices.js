function compareMatrices(matrixA, matrixB) {
  if (matrixA.length !== matrixB.length) {
    console.log("not equal");
    return;
  }

  for (let i = 0; i < matrixA.length; i++) {
    for (let j = 0; j < matrixA[i].length; j++) {
      if (matrixA[i].length !== matrixB[i].length) {
        console.log("not equal");
        return;
      }

      if (matrixA[i][j] !== matrixB[i][j]) {
        console.log("not equal");
        return;
      }
    }
  }
  console.log("equal");
}

compareMatrices(
  [
    [1, 2, 3],
    [2, 1, 3],
  ],
  [
    [1, 2, 3],
    [2, 1, 3],
  ]
);

compareMatrices(
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [1, 3],
    [4, 5],
  ]
);

compareMatrices(
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [1, 3, 5],
    [4, 5, 5],
  ]
);