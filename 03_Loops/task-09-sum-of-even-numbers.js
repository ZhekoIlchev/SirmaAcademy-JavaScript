function sumEveFirstEvenNumbers(number) {
    let sum = 0;
    let step = 0;

    for (let i = 0; i < number; i++) {
        step += 2;
        sum += step;
    }

    console.log(sum);
}

sumEveFirstEvenNumbers(3);
sumEveFirstEvenNumbers(5);
sumEveFirstEvenNumbers(1);
sumEveFirstEvenNumbers(0);
sumEveFirstEvenNumbers(10);