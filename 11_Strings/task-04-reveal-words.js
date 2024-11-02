function revealWords(words, text) {
    let specialWords = new Map();
    let wordsAsArray = words.split(', ');
    let textAsArray = text.split(' ');

    for (const word of wordsAsArray) {
        specialWords.set(String(word).length, word);
    }

    let revealedText = '';
    for (const element of textAsArray) {
        if (String(element).startsWith('*')) {
            let revealedWord = specialWords.get(element.length);
            if (revealedWord) {
                revealedText += revealedWord + ' ';
            }
        } else {
            revealedText += element + ' ';
        }
    }

    console.log(revealedText.trim());
}

revealWords('great', 'JavaScript* is ***** programming language');
revealWords('the, best, learn', 'JavaScript is *** **** language to *****');