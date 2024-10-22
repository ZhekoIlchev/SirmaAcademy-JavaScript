function choosePath(item1, item2) {

    switch (item1) {
        case 'sword':
            if (item2 == 'shield') {
                console.log('Path to the castle');
            } else {
                console.log('Path to the forest');
            }
            break;
        case 'map':
            if (item2 == 'coins') {
                console.log('Go to the town');
            } else {
                console.log('Camp');
            }
            break;
        default:
            console.log('Wander aimlessly');
            break;
    }
}

choosePath("sword", "shield");
choosePath("map", "coins");
choosePath("torch", "flower");
choosePath("sword", "pouch");
choosePath("map", "compass");