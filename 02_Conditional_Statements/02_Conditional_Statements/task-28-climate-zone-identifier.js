function identifyZone(latitudeValue) {
    let latitudeValueAbsolute = Math.abs(latitudeValue);

    if (latitudeValueAbsolute == 0) {
        console.log('Equator');
    } else if (0 <= latitudeValueAbsolute && latitudeValueAbsolute <= 23.5) {
        console.log('Tropic Zone');
    } else if (23.5 < latitudeValueAbsolute && latitudeValueAbsolute <= 66.5) {
        console.log('Temperate Zone');
    } else if (latitudeValueAbsolute > 66.5) {
        console.log('Arctic Zone');
    }
}

identifyZone(70);
identifyZone(45);
identifyZone(10);
identifyZone(0);
identifyZone(-85);