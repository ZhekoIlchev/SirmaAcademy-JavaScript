function getWeekDay(number) {
    let weekDays =
        [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ]

    let day = weekDays[number - 1];

    if (day) {
        console.log(weekDays[number - 1]);
    } else {
        console.log('Invalid day!')
    }
}

getWeekDay(3);
getWeekDay(6);
getWeekDay(11);