function solve(number) {
    let devidedNumber = Math.trunc(number / 10);
    let message = `${number}% `;

    if (number === 100) {
        for (let i = 0; i < devidedNumber; i++) {
            if (i === 0) {
                message += '[%'
            } else if (i === devidedNumber - 1) {
                message += '%]'
            } else {
                message += '%';
            }
        }
    } else {
        let end = Math.abs(10, number);

        for (let i = 0; i < devidedNumber; i++) {
            if (i === 0) {
                message += '[%';
            } else {
                message += '%';
            }
        }

        for (let i = devidedNumber; i < 10; i++) {
            if (i !== 9) {
                message += '.';
            } else {
                message += '.]';
            }
        }
    }

    console.log(message);
    console.log(number == 100 ? 'Complete!' : 'Loading...');
}

solve(30);
solve(50);
solve(100);