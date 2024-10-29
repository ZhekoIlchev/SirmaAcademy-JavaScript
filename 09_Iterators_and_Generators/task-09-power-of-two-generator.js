function* powerOfTwo() {
    let power = 0;
    let value = 0;

    while (value < 256) {
        value = Math.pow(2, power++)
        yield value;
    }
}

let iterator = powerOfTwo();
for (const element of iterator) {
    console.log(element);
}