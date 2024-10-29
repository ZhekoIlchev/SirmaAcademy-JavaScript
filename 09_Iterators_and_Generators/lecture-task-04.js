class DataStream {
    constructor(data, chunkSize) {
        this.data = data;
        this.chunkSize = chunkSize;
    }

    [Symbol.iterator]() {
        let index = 0;
        const data = this.data;
        const size = this.chunkSize;

        return {
            next() {
                if (index < data.length) {
                    let currentData = data.slice(index, index + size);
                    index += size;

                    return {
                        value: currentData,
                        done: false
                    }
                }

                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}

let data = new DataStream('Hello, world!', 2);
for (const chunk of data) {
    console.log(chunk);
}