class CharCodeIterator {
    constructor(data) {
        this.data = data;
    }

    [Symbol.iterator]() {
        let data = this.data;
        let index = 0;
        return {
            next() {
                if (index <= data.length) {
                    let currentValue = String(data).charCodeAt(index);
                    index++;
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

let array1 = ['ab'];
let iterator1 = new CharCodeIterator(array1);
for (const element of iterator1) {
    console.log(element);
}

let array2 = ['cd'];
let iterator2 = new CharCodeIterator(array2);
for (const element of iterator2) {
    console.log(element);
}

let array3 = ['ef'];
let iterator3 = new CharCodeIterator(array3);
for (const element of iterator3) {
    console.log(element);
}