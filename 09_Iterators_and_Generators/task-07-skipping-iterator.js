class SkippingIterator {
    constructor(data) {
        this.data = data;
    }

    [Symbol.iterator]() {
        let data = this.data;
        let index = 0;
        return {
            next() {
                if (index < data.length) {
                    let currentValue = data[index];
                    index += 2;
                    return {
                        value: currentValue,
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

let array1 = [1, 2, 3, 4];
let iterator1 = new SkippingIterator(array1);
for (const element of iterator1) {
    console.log(element);
}

let array2 = ['a', 'b', 'c', 'd'];
let iterator2 = new SkippingIterator(array2);
for (const element of iterator2) {
    console.log(element);
}

let array3 = [5, 6, 7, 8, 9];
let iterator3 = new SkippingIterator(array3);
for (const element of iterator3) {
    console.log(element);
}