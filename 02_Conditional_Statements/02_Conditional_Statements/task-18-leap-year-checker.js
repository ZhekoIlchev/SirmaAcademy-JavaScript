function checkYear(year) {
    let leapYear = (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);

    console.log(leapYear == true ? "It's a leap year!" : "It's not a leap year.");
}

checkYear(2020);
checkYear(1900);
checkYear(2000);
checkYear(2023);
checkYear(1600);