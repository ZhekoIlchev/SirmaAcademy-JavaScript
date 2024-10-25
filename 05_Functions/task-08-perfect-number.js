function isNumberPerfect(number) {

    let array = [];

    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            array.push(i);
        }
    }

    let sum = 0;
    for (let element of array) {
        sum += element;
    }

    console.log(sum === number ? 'Perfect number!' : `It's not so perfect.`);
}

isNumberPerfect(6);
isNumberPerfect(28);
isNumberPerfect(1236498);