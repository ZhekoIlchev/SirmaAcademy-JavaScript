function convertMinutesToHourAndMinutes(minutes) {
    let hour = Math.floor(minutes / 60).toString().padStart(2, "0");
    let mins = (minutes % 60).toString().padStart(2, "0");

    console.log(hour + ":" + mins)
}

convertMinutesToHourAndMinutes(60);
convertMinutesToHourAndMinutes(90);
convertMinutesToHourAndMinutes(325);
convertMinutesToHourAndMinutes(650);