function reverseNumber(number) {
    let reversedNumber = '';
    for (let i = String(number).length; i >= 0; i--) {
        reversedNumber += String(number).charAt(i);
    }

    console.log(reversedNumber);
}

reverseNumber(123);
reverseNumber(9876);
reverseNumber(505);
reverseNumber(10203);
reverseNumber(7);