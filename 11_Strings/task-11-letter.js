function solve(text, array) {
    let correctWords = new Map();

    for (const word of array) {
        correctWords.set(word.length, word)
    }

    const regex = /_+/g;
    let emptyWords = text.match(regex);
    let result = text;

    for (let i = 0; i < correctWords.size; i++) {
        let currentWord = emptyWords[i];
        let replace = correctWords.get(emptyWords[i].length);

        result = result.replace(currentWord, replace);
    }

    console.log(result);
    console.log(text);
}

solve("Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so many _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"]);