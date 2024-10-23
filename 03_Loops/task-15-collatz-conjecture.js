function solve(number) {
    let result = number;

    while (number > 1) {

        if (number % 2 === 0) {
            number = number / 2;
        } else {
            number = number * 3 + 1;
        }

        result += ' ' + number;
    }

    console.log(result);
}

solve(6);
solve(12);
solve(9);
solve(200);
solve(15);