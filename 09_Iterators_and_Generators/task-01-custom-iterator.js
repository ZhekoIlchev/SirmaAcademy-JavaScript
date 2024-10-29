const object1 = {
    a: 'apple',
    b: 'banana',
    c: 'cherry',
}

for (const key in object1) {
    console.log(`${key} -> ${object1[key]}`);
}

obj = {
    a: 'cherry',
    b: 'apple',
    c: 'banana',
    [Symbol.iterator]() {
        const keys = Object.keys(this);
        let index = 0;

        return {
            next() {
                if (index < keys.length) {
                    return {
                        value: keys[index++],
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

for (const key of obj) {
    console.log(`${key} ---- ${obj[key]}`);
}