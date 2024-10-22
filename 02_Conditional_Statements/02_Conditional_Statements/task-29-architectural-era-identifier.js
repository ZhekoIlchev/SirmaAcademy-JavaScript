function identifyEra(year, material) {

    if (year < 500 && material == 'stone') {
        console.log('Ancient');
    } else if (500 <= year && year <= 1500 && material == 'stone') {
        console.log('Medieval');
    } else if (1500 <= year && year <= 1800 && material == 'wood') {
        console.log('Colonial');
    } else if (1800 < year && year <= 1900 && material == 'steel') {
        console.log('Industrial');
    } else if (year > 1900 && material == 'steel') {
        console.log('Modern');
    } else {
        console.log('Uncertain');
    }
}

identifyEra(300, 'stone');
identifyEra(1500, 'wood');
identifyEra(1500, 'stone');
identifyEra(2000, 'steel');
identifyEra(1100, 'wood');