function splitText(text) {
    const regex = /[A-Z]{1}[a-z]+/g;
    let array = text.match(regex);

    console.log(array.join(', '))
    console.log('---');
}

splitText('SplitMeIfYouCan');
splitText('HoldTheDoor');
splitText('ThisIsSoAnnoying');