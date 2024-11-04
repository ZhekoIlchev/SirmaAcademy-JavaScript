function matchFullName(input) {
    const regex = /\b[A-Z]{1}[a-z]+[ ]{1}[A-Z]{1}[a-z]+/g;
    let result = input.match(regex);

    console.log(result.join(', '));
}

matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov');