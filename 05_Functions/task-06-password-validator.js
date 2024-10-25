function isLengthValid(password) {
    if (6 <= String(password).length && String(password).length <= 10) {
        return true;
    } else {
        false;
    }
}

function isAlphaNumeric(password) {
    const regex = /^[a-zA-Z0-9]+$/
    return regex.test(password);
}

function hasTwoDigitsAtLeast(password) {
    const regex = /[0-9]/
    let digitsCount = 0;

    for (let character of password) {
        if (regex.test(character)) {
            digitsCount++
        }

        if (digitsCount >= 2) {
            break;
        }
    }

    return digitsCount >= 2 ? true : false;
}

function isPasswordValid(password) {
    let isValid = true;

    if (!isLengthValid(password)) {
        console.log('Password must be between 6 and 10 characters.');
        isValid = false;
    }

    if (!isAlphaNumeric(password)) {
        console.log('Password must consist only of letters and digits.');
        isValid = false;
    }

    if (!hasTwoDigitsAtLeast(password)) {
        console.log('Password must have at least 2 digits.');
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid.');
    }
}

isPasswordValid('pass');
console.log('-----');
isPasswordValid('APass123');
console.log('-----');
isPasswordValid('pa$s$s');