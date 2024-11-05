function countDementors(initialCount, increaseCount, hours) {
    let totalCount = initialCount;

    for (let i = 1; i < hours; i++) {
        initialCount += increaseCount;
        totalCount += initialCount;
    }

    console.log(totalCount);
}

// countDementors(5, 2, 3);
// countDementors(7, 1, 2);
// countDementors(10, -1, 1);
// countDementors(8, -2, 3);