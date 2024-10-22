function calculateResult(num1, num2, operation) {
    let result;

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'divide') {
        if (num2 != 0) {
            result = num1 / num2;
        } else {
            console.log(`Dividing by 0 not allowed!`);
            return;
        }
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else {
        console.log(`Unknown opetaion!`);
        return;
    }

    console.log(result);
}

calculateResult(5, 5, 'add');
calculateResult(10, 12, 'subtract');
calculateResult(9, 3, 'divide');
calculateResult(5, 2, 'divide');
calculateResult(3.1, 0.1, 'multiply');
calculateResult(3.1, 0, 'divide');
calculateResult(3.1, 0.1, 'multiplyy');