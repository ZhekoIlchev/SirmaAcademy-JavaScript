function findNFactorial(number) {
    let nFactorial = 1;

    for(let i = number; i> 0; i--) {
        nFactorial *= i;
    }

    console.log(nFactorial);
}

findNFactorial(5);
findNFactorial(3);
findNFactorial(0);
findNFactorial(1);
findNFactorial(10);