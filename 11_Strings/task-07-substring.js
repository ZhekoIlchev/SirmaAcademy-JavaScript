function findWord(word, text) {
    let pattern = new RegExp(word, 'gi');
    let result = pattern.exec(text);

    if (result) {
        console.log(word);
    } else {
        console.log(`${word} not found!`)
    }
}

findWord('javascrip', 'JavaScript is the best programming language');
findWord('python', 'JavaScript is the best programming language');