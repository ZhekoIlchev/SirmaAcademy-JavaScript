function findSmallerNumber(a, b) {
    return a <= b ? a : b;
}

function findSmallestOfThreeNumbers(a, b, c) {
    let smallestNumber = findSmallerNumber(findSmallerNumber(a, b), c);
    console.log(smallestNumber);
}

findSmallestOfThreeNumbers(2, 5, 3);
findSmallestOfThreeNumbers(600, 342, 123);
findSmallestOfThreeNumbers(25, 21, 4);