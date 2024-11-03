function solve(input) {
    let array = input.split(' ');

    for (const element of array) {
        if (String(element).startsWith('#') && String(element).length > 1) {
            console.log(String(element).substring(1));
        }
    }
}

solve('Everyone uses # to tag a #special word in #facebook');
console.log('---')
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');