function printSpeedInformation(speed) {
    let speedInformation;
    if (speed <= 10) {
        speedInformation = "slow";
    } else if (speed <= 60) {
        speedInformation = "average";
    } else if (speed <= 120) {
        speedInformation = "fast";
    } else if (speed <= 160) {
        speedInformation = "super-fast";
    } else {
        speedInformation = "turbo-fast";
    }

    console.log(speedInformation);
}

printSpeedInformation(10);
printSpeedInformation(59);
printSpeedInformation(120);
printSpeedInformation(121);
printSpeedInformation(183);
printSpeedInformation(59.99);
printSpeedInformation(60.001);