function sumElements(array) {
    let firstElement = Number(array[0]);
    let lastElement = Number(array[array.length - 1]);
    let sum = firstElement + lastElement;

    console.log(sum);
}

sumElements(['20', '30', '40']);
sumElements(['10', '17', '22', '33']);
sumElements(['11', '58', '69']);