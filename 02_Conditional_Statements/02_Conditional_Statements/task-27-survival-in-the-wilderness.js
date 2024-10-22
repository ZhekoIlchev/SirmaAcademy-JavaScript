function makeDecision(timeOfDay, environment, item) {
    switch (timeOfDay) {
        case 'day':
            if (environment == 'forest') {
                if (item == 'knife') {
                    console.log('Hunt for food')
                } else if (item == 'container') {
                    console.log('Collect berries')
                } else {
                    console.log('Explore')
                }
            } else {
                if (item == 'hat') {
                    console.log('Search for water')
                } else {
                    console.log('Find shade')
                }
            }
            break;
        case 'night':
            if (environment == 'forest') {
                if (item == 'firestarter') {
                    console.log('Make campfire')
                } else {
                    console.log('Climb on a tree')
                }
            } else {
                if (item == 'blanket') {
                    console.log('Sleep')
                } else {
                    console.log('Keep moving to stay warm')
                }
            }
            break;
    }
}

makeDecision("day", "forest", "knife");
makeDecision("day", "forest", "container");
makeDecision("night", "forest", "firestarter");
makeDecision("day", "forest", "bag");
makeDecision("night", "desert", "blanket");
makeDecision("day", "desert", "hat");
makeDecision("night", "desert", "sword");
makeDecision("night", "forest", "hat");