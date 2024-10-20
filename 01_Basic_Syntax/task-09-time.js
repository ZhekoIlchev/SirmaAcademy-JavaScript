function convertMinutesToHoursAndMinutes(minutes) {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;

    console.log(hours + ":" + mins);
}

convertMinutesToHoursAndMinutes(60);
convertMinutesToHoursAndMinutes(90);
convertMinutesToHoursAndMinutes(325);
convertMinutesToHoursAndMinutes(68);