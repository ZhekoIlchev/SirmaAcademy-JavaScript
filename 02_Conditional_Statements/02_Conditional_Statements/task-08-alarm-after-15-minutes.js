function printTimeAfterFifteenMinutes(hour, mins) {
    minutes = mins + 15;

    if (minutes >= 60) {
        minutes -= 60;
        hour += 1;
    }

    if (hour >= 24) {
        hour = 0;
    }

    console.log(`${hour}:${String(minutes).padStart(2, 0)}`);
}

printTimeAfterFifteenMinutes(1, 47);
printTimeAfterFifteenMinutes(0, 2);
printTimeAfterFifteenMinutes(23, 59);
printTimeAfterFifteenMinutes(11, 7);
printTimeAfterFifteenMinutes(12, 48);