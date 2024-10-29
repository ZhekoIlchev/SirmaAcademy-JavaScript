class SequanceGenerator {
    * next() {
        let value = 1;

        while (value < 10) {
            yield value++;
        }
    }
}

let seqGenerator = new SequanceGenerator().next();
console.log(seqGenerator.next().value);
console.log(seqGenerator.next().value);
console.log(seqGenerator.next().value);
console.log(seqGenerator.next().value);
console.log(seqGenerator.next().value);

for (const element of seqGenerator) {
    console.log(element);
}