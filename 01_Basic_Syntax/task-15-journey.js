function calculateDistance(firstCarSpeed, secondCarSpeed) {
    let firstCarDistance = firstCarSpeed * 5;
    let secondCarDistance = secondCarSpeed * 3;
    let distance = Math.abs(firstCarDistance - secondCarDistance);

    console.log(distance);
}

calculateDistance(81, 120);
calculateDistance(100, 90);
calculateDistance(75, 90);