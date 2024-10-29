function* fibonacci() {
    let first = 1;
    let second = 1;
    yield first;
    yield first;

    while(true) {
        let next = first + second;
        yield next;

        first = second;
        second = next;
    }
}

const iterator = fibonacci();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());