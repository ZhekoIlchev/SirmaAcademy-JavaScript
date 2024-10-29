class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    [Symbol.iterator]() {
        let startNumber = this.start;
        let endNumber = this.end;

        return {
            next() {
                if (startNumber <= endNumber) {
                    return {
                        value: startNumber++,
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

let range = new Range(1, 5);

for (const element of range) {
    console.log(element);
}