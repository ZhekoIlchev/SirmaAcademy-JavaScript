function isWordPalindrome(word) {
    let isPalindrome = false;
    let reversedWord = '';

    for (let i = String(word).length; i >= 0; i--) {
        reversedWord += String(word).charAt(i);
    }

    if (word === reversedWord) {
        isPalindrome = true;
    }

    console.log(isPalindrome);
}

isWordPalindrome('radar');
isWordPalindrome('hello');
isWordPalindrome('racecar');
isWordPalindrome('java');
isWordPalindrome('madam');