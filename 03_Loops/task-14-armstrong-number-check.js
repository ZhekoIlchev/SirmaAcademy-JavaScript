function isArmstrongNumber(number) {
    let isArmstrongNumber = false;
    const power = String(number).length;
    let sum = 0;

    for (let i = String(number).length; i >= 0; i--) {
        let currentNumber = String(number).charAt(i);
        sum += Math.pow(currentNumber, power);
    }

    if (number === sum) {
        isArmstrongNumber = true;
    }

    console.log(isArmstrongNumber);
}

isArmstrongNumber(153);
isArmstrongNumber(370);
isArmstrongNumber(123);
isArmstrongNumber(407);
isArmstrongNumber(1634);