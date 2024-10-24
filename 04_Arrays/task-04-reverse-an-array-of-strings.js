function reverseArray(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let currentElement = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = currentElement;
    }

    console.log(array.join(' '));
}

reverseArray(['a', 'b', 'c', 'd', 'e']);
reverseArray(['abc', 'def', 'hig', 'klm', 'nop']);
reverseArray(['33', '123', '0', 'dd']);