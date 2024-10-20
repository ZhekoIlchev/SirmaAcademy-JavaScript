function calculateLitersOfPaint(yellow) {
    let red = yellow / 4;
    let white = yellow * 2;

    let sum = yellow + red + white;

    console.log("Red: " + red);
    console.log("Yellow: " + yellow)
    console.log("White: " + white)
    console.log("Total: " + sum)
}

calculateLitersOfPaint(10);
calculateLitersOfPaint(17);
calculateLitersOfPaint(42);