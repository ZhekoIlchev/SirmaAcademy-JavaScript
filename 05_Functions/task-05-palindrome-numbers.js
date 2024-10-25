function checkNumbers(array) {

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        console.log(isPalindrome(currentNumber));
    }
}

function isPalindrome(number) {
    let initialNumber = number;
    let reversedNumber = '';

    while (number > 0) {
        let currentDigit = number % 10;
        reversedNumber += currentDigit;

        number = Math.trunc(number / 10);
    }

    return initialNumber === Number(reversedNumber);
}

checkNumbers([123, 323, 421, 121]);
checkNumbers([32, 2, 232, 1010]);