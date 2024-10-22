function checkNumber(number) {
    if ((-100 <= number && number <= 100) && number != 0) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}

checkNumber(-25);
checkNumber(0);
checkNumber(25);