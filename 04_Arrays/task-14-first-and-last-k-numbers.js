function solve(count, input) {

    let firstKelements = [];
    for (let i = 0; i < count; i++) {
        firstKelements.push(input[i]);
    }

    let lastKElements = [];
    for (let i = input.length - count; i < input.length; i++) {
        lastKElements.push(input[i]);
    }

    console.log(firstKelements.join(' '));
    console.log(lastKElements.join(' '));
}

solve(2, [7, 8, 9]);
solve(3, [6, 7, 8, 9]);