function solve(array) {
    let longestSequence = 1;
    let element;

    let currentSequence = 1;
    let currentElement;

    for (let i = 0; i < array.length - 1; i++) {

        if (array[i] === array[i + 1]) {
            currentSequence++;
            currentElement = array[i];

            if (currentSequence > longestSequence) {
                longestSequence = currentSequence;
                element = currentElement;
            }

        } else {
            currentSequence = 1;
        }
    }

    let longestSequenceAsArray = [];
    for (let i = 0; i < longestSequence; i++) {
        longestSequenceAsArray.push(element);
    }

    console.log(longestSequenceAsArray.join(' '));
}

solve([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3, 1, 1]);
solve([1, 1, 2, 3, 4, 5, 6, 2, 2]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);