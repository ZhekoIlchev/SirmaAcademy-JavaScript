function printEveryNthElement(array, step) {
    let newArray = [];

    for (let i = 0; i < array.length; i += step) {
        newArray.push(array[i]);
    }

    console.log(newArray.join(' '));
}

printEveryNthElement(['5', '15', '31', '14', '20'], 2);
printEveryNthElement(['dsa', 'asd', 'demo', 'test'], 2);
printEveryNthElement(['1', '2', '3', '4', '5'], 6);