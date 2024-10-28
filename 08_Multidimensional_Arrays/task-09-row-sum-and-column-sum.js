function solve(matrix) {
  let convertedMatrix = parseMatrix(matrix);
  let rowSum = [];
  let columnSum = [];

  for (let row of convertedMatrix) {
    rowSum.push(row.reduce((a, b) => a + b, 0));
  }

  for (let column = 0; column < convertedMatrix[0].length; column++) {
    let currentColumn = [];
    for (let row = 0; row < convertedMatrix.length; row++) {
      currentColumn.push(convertedMatrix[row][column]);
    }
    columnSum.push(currentColumn.reduce((a, b) => a + b, 0));
  }

  console.log(`Row Sums: ${rowSum.join(" ")}`);
  console.log(`Column Sums: ${columnSum.join(" ")}`);
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

solve(["1 2", "3 4", "5 6"]);
console.log("---");
solve(["1 2 3", "4 5 6", "7 8 9"]);