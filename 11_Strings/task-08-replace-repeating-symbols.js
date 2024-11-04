function solve(input) {
    let set = new Set();
    let inputAsArray = input.split('');

    for (let i = 0; i < inputAsArray.length - 1; i++) {
        if (inputAsArray[i] === inputAsArray[i + 1]) {
            inputAsArray.splice(i, 1);
            i--;
        }
    }

    console.log(inputAsArray.join(''));
}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');