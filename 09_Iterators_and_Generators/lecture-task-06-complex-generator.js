function* genA() {
    yield 1;
    yield 2;
    yield* genB();
    yield 5;

}

function* genB() {
    yield 3;
    yield 4;
}

const iterator = genA();

let currentValue = iterator.next();
while (!currentValue.done) {
    console.log(currentValue)
    currentValue = iterator.next();
}