function solve(number1, number2) {
    console.log((getNFactorial(number1) / getNFactorial(number2)).toFixed(2));
}

function getNFactorial(number) {
    let nFactoraial = 1;

    for (let i = number; i >= 1; i--) {
        nFactoraial *= i;
    }

    return nFactoraial;
}

solve(5, 2);
solve(6, 2);