function compareTwoArrays(arr1, arr2) {
    let sum = 0;
    let flag = true;
    let indexOfDifference = null;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            sum += Number(arr1[i]);
        } else {
            flag = false;
            indexOfDifference = i;
            break;
        }
    }

    if (flag) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexOfDifference} index`)
    }


}

compareTwoArrays(['10', '20', '30'], ['10', '20', '30']);
compareTwoArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
compareTwoArrays(['1'], ['10']);