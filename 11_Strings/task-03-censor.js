function censor(text, word) {
    console.log(String(text).replaceAll(word, String('*').repeat(word.length)));
}

censor('A small sentence with some words', 'small');
censor('Find the hidden word', 'hidden');
censor('A small sentence with small words', 'small');