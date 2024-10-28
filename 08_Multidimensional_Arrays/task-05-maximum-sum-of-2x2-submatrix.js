function solve(matrix) {
  let convertedMatrix = parseMatrix(matrix);
  let bestSubmatrix;
  let sum = 0;

  for (let i = 0; i < convertedMatrix.length - 1; i++) {
    for (let j = 0; j < convertedMatrix[i].length - 1; j++) {
      let num1 = convertedMatrix[i][j];
      let num2 = convertedMatrix[i][j + 1];
      let num3 = convertedMatrix[i + 1][j];
      let num4 = convertedMatrix[i + 1][j + 1];
      let currentSum = num1 + num2 + num3 + num4;

      if (currentSum > sum) {
        sum = currentSum;
        let currentMatrix = [
          [num1, num2],
          [num3, num4],
        ];
        bestSubmatrix = currentMatrix;
      }
    }
  }

  console.log(sum);

  printMatrix(bestSubmatrix);
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

function printMatrix(matrix) {
  for (const element of matrix) {
    console.log(element.join(" "));
  }
}

solve(["7 1 3 3 2 1", "1 3 9 8 5 6", "4 6 7 9 1 0"]);
console.log("---");
solve(["10 11 12 13", "14 15 16 17"]);