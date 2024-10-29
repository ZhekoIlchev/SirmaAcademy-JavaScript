class ReverseIterator {
    constructor(data) {
        this.data = data;
    }

    [Symbol.iterator]() {
        let data = this.data;
        let index = data.length - 1;
        return {
            next() {
                if (index >= 0) {
                    return {
                        value: data[index--],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

let array1 = [1, 2, 3];
let iterator1 = new ReverseIterator(array1);
for (const element of iterator1) {
    console.log(element);
}

let array2 = ['a', 'b', 'c'];
let iterator2 = new ReverseIterator(array2);
for (const element of iterator2) {
    console.log(element);
}

let array3 = [5, 4, 3, 2, 1];
let iterator3 = new ReverseIterator(array3);
for (const element of iterator3) {
    console.log(element);
}