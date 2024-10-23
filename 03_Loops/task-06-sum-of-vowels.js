function fumVowels(text) {

    let sum = 0;

    for (let i = 0; i < String(text).length; i++) {
        let letter = String(text).charAt(i);

        switch (letter) {
            case 'a':
                sum += 1;
                break;
            case 'e':
                sum += 2;
                break;
            case 'i':
                sum += 3;
                break;
            case 'o':
                sum += 4;
                break;
            case 'u':
                sum += 5;
                break;
        }
    }

    console.log(sum);
}

fumVowels('hello');
fumVowels('hi');
fumVowels('bye');
fumVowels('zzzz');