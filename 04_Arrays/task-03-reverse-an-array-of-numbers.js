function reverseArray(to, array) {

    let reversedArray = [];

    for (let index = to - 1; index >= 0; index--) {
        reversedArray.push(array[index]);
    }

    console.log(reversedArray.join(' '))
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);