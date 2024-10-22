function brewPotion(ingredient1, ingredient2) {
    switch (ingredient1) {
        case 'herbs':
            if (ingredient2 == 'water') {
                console.log('Health potion');
            } else if (ingredient2 == 'oil') {
                console.log('Stealth potion');
            } else {
                console.log('Minor stamina potion');
            }
            break;
        case 'berries':
            if (ingredient2 == 'sugar') {
                console.log('Speed potion');
            } else {
                console.log('Minor energy potion');
            }
            break;
        default:
            console.log("Can't brew any potion");
            break;
    }
}

brewPotion("herbs", "water");
brewPotion("herbs", "oil");
brewPotion("herbs", "banana");
brewPotion("berries", "sugar");
brewPotion("berries", "banana");
brewPotion("herbs", "sugar");
brewPotion("sugar", "salt");