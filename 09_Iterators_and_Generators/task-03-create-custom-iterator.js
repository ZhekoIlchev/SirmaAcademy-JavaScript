const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class OddIterator {
    constructor(data) {
        this.data = data;
    }

    [Symbol.iterator]() {
        let oddValues = this.data.filter(e => e % 2 !== 0);
        let index = 0;

        return {
            next() {
                return {
                    value: oddValues[index++],
                    done: index > oddValues.length
                }
            }
        }
    }
}

const oddValues = new OddIterator(array);
for (const element of oddValues) {
    console.log(element);
}