function printMultiplicationTable() {
    for (let multiplicand = 1; multiplicand <= 10; multiplicand++) {

        for (let multiplier = 1; multiplier <= 10; multiplier++) {
            let product = multiplicand * multiplier;
            console.log(`${multiplicand} * ${multiplier} = ${product}`)
        }
    }
}

printMultiplicationTable();