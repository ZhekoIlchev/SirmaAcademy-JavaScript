function excelColumnToNumber(columnName) {
  let columnNumber = 0;

  for (let i = 0; i < columnName.length; i++) {
    const currentCharValue = columnName.charCodeAt(i) - 64;

    columnNumber = columnNumber * 26 + currentCharValue;
  }

  return columnNumber;
}

console.log(excelColumnToNumber("AAA"));
console.log(excelColumnToNumber("AB"));
console.log(excelColumnToNumber("A"));
console.log(excelColumnToNumber("C"));
console.log(excelColumnToNumber("CZ"));
console.log(excelColumnToNumber("MM"));