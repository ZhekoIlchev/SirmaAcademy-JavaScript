function sumEvenElements(array) {
    let sum = 0;

    for (let element of array) {
        let parsedElement = Number(element);

        if (parsedElement % 2 == 0) {
            sum += parsedElement;
        }
    }

    console.log(sum);

}

sumEvenElements(['1', '2', '3', '4', '5', '6']);
sumEvenElements(['3', '5', '7', '9']);
sumEvenElements(['2', '4', '6', '8', '10']);