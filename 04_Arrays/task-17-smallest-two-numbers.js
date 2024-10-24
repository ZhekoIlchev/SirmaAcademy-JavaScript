function solve(array) {
    let smallestNumber1 = array[0];
    let smallestNumber2 = array[1];

    if (smallestNumber1 <= smallestNumber2) {
        let smallestNumber = smallestNumber2;
        smallestNumber1 = smallestNumber2;
        smallestNumber2 = smallestNumber;
    }

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];

        if (currentElement <= smallestNumber2 && currentElement >= smallestNumber1) {
            smallestNumber2 = currentElement;
        } else if (currentElement <= smallestNumber1) {
            smallestNumber2 = smallestNumber1;
            smallestNumber1 = currentElement;
        }

    }

    console.log(smallestNumber1, smallestNumber2);

}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);