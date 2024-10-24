function manipulateArray(array) {
    let biggesElement = array[0];

    for (let i = 0; i < array.length; i++) {

        if (i === 0) {
            continue;
        } else {
            if (array[i] < array[i - 1]) {
                array.splice(i--, 1);
            } else if (array[i] >= biggesElement) {
                biggesElement = array[i];
            }
        }
    }

    console.log(array.join(' '));
}

manipulateArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
manipulateArray([1, 2, 3, 4]);
manipulateArray([20, 3, 2, 15, 6, 1]);