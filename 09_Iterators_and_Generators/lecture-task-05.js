function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = numberGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());