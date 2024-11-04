function matchDates(input) {
    let regex = /\b(\d{2})\/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\/(\d{4})\b|\b(\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{4})\b|\b(\d{2})\.(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\.(\d{4})\b/g;
    console.log(input);
    let result = input.matchAll(regex);

    let group = 1;
    for (const date of result) {
        console.log(`Day: ${date[group++]}, Month: ${date[group++]}, Year: ${date[group++]}`);
    }
}

matchDates('13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23#09#1973, 1/Feb/2016');
matchDates('1/Jan-1951, 23/October/197, 11-Dec-2010, 18.Jan.2014');