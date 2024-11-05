function decryptMessage(encryptedMessage, secretCode) {
    let encryptedMessageAsArray = encryptedMessage.split('');

    if ((1 <= encryptedMessage.length && encryptedMessage.length <= 100) && (1 <= secretCode && secretCode <= 25)) {
        for (let i = 0; i < encryptedMessageAsArray.length; i++) {
            let letterAsciiCode = String(encryptedMessageAsArray[i]).charCodeAt(0);
            let decryptedLetter = letterAsciiCode - secretCode;
            encryptedMessageAsArray[i] = String.fromCharCode(decryptedLetter);
        }

        console.log(encryptedMessageAsArray.join(""));
    } else {
        console.log('Invalid message or secret code');
    }

}

// decryptMessage('Uifsf!jt!b!tfdsfu"', 1);
// decryptMessage('vvhhdkdvkkdvvhh$', 3);
// decryptMessage('Ibssz!Qpuufs', 1);