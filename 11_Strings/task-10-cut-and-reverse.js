function solve(text) {
    let firstHalf = text.substring(0, text.length / 2);
    let secondHalf = text.substring(text.length / 2);

    const regex = /[a-z]+[A-Z]?[A-Z]{1}/g;
    let firstHalfAsArray = firstHalf.match(regex);
    let secondHalfAsArray = secondHalf.match(regex);

    console.log(reverseArray(firstHalfAsArray));
    console.log(reverseArray(secondHalfAsArray));
}

function reverseArray(array) {
    let result = '';

    for (let i = array.length - 1; i >= 0; i--) {
        let reversedElement = array[i].split('').reverse().join('');
        result += reversedElement;
    }

    return result;
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');