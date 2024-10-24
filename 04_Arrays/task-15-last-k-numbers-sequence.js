function solve(times, sequence) {
    let array = [1];

    for (let i = 0; i < times - 1; i++) {

        if (array.length <= sequence) {
            let addElement = 0;

            for (let j = 0; j < array.length; j++) {
                addElement += array[j];
            }

            array.push(addElement);
        } else {
            let addElement = 0;

            for (let k = i; k > i - sequence; k--) {
                addElement += array[k];
            }
            array.push(addElement);
        }
    }

    console.log(array.join(' '));
}

solve(6, 3);
solve(8, 2);