function solve(text) {
    let arr = text.split(' ');
    let longestWord;
    let longestLength = Number.MIN_VALUE;
    let shortestWord;
    let shortestLength = Number.MAX_VALUE;

    for (let word of arr) {
        let wordLength = String(word).length

        if (wordLength < shortestLength) {
            shortestLength = wordLength
            shortestWord = word;
        }

        if (wordLength > longestLength) {
            longestLength = wordLength
            longestWord = word;
        }
    }

    console.log(`Longest -> ${longestWord}`);
    console.log(`Shortest -> ${shortestWord}`);
}

solve('Hello how are you today? I hope you are fine');
solve('Lorem Ipsum is dummy text of the typesetting industry');