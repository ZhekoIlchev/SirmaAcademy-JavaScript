function printReference(age, gender) {
    let reference;

    if (gender == 'm') {
        if (age <= 16) {
            reference = 'Master';
        } else {
            reference = 'Mr.'
        }
    } else {
        if (age <= 16) {
            reference = 'Miss';
        } else {
            reference = 'Ms.'
        }
    }

    console.log(reference);
}

printReference(14, 'f');
printReference(17, 'm');
printReference(10, 'm');
printReference(32, 'f');