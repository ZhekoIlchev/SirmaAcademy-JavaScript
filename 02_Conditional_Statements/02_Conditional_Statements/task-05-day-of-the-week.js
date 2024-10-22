function getDayOfWeek(weekDay) {
    let weekDayAsWord;
    switch (weekDay) {
        case 1:
            weekDayAsWord = "Monday";
            break;
        case 2:
            weekDayAsWord = "Tuesday";
            break;
        case 3:
            weekDayAsWord = "Wednesday";
            break;
        case 4:
            weekDayAsWord = "Thursday";
            break;
        case 5:
            weekDayAsWord = "Friday";
            break;
        case 6:
            weekDayAsWord = "Saturday";
            break;
        case 7:
            weekDayAsWord = "Sunday";
            break;
        default:
            weekDayAsWord = "Error";
            break;
    }

    console.log(weekDayAsWord);
}

getDayOfWeek(1);
getDayOfWeek(2);
getDayOfWeek(3);
getDayOfWeek(4);
getDayOfWeek(5);
getDayOfWeek(6);
getDayOfWeek(7);
getDayOfWeek(8);