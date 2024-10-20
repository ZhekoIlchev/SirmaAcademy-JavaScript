function calculateSpeed(distance, hours, minutes, seconds) {
    let hoursInSeconds = hours * 60 * 60;
    let minutesInSeconds = minutes * 60;
    let totalTimeInSeconds = hoursInSeconds + minutesInSeconds + seconds;

    let speedInMeters = distance / totalTimeInSeconds;

    console.log(speedInMeters.toFixed(6));
}

calculateSpeed(100, 1, 20, 20);
calculateSpeed(2500, 5, 56, 23);
calculateSpeed(600, 7, 35, 55);