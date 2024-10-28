function solve(count, pattern) {
  let number = 1;
  let matrix = [];

  if (pattern === "A") {
    for (let column = 0; column < count; column++) {
      for (let row = 0; row < count; row++) {
        if (!matrix[row]) {
          matrix[row] = [];
        }

        matrix[row][column] = number++;
      }
    }
  } else {
    for (let column = 0; column < count; column++) {
      if (column % 2 == 0) {
        for (let row = 0; row < count; row++) {
          if (!matrix[row]) {
            matrix[row] = [];
          }

          matrix[row][column] = number++;
        }
      } else {
        for (let row = count - 1; row >= 0; row--) {
          if (!matrix[row]) {
            matrix[row] = [];
          }

          matrix[row][column] = number++;
        }
      }
    }
  }

  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

solve(3, "A");
console.log('---');
solve(3, "B");
console.log('---');
solve(4, "A");
console.log('---');
solve(4, "B");