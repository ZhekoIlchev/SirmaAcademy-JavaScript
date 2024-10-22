function calculateLuggageCharge(weight, dimensions) {
    const allowedDimmensions = 158;
    let price = 0;
    let difference = allowedDimmensions - dimensions

    if (difference < 0) {
        if (1 <= Math.abs(difference) && Math.abs(difference) <= 20) {
            price += 50;
        } else if (21 <= Math.abs(difference) && Math.abs(difference) <= 50) {
            price += 100;
        } else {
            price += 200;
        }
    }

    if (weight > 50) {
        price += 100;
    }

    if (weight > 50 && difference < 0) {
        price += 50;
    }

    console.log(price);
}

calculateLuggageCharge(52, 160);
calculateLuggageCharge(48, 180);
calculateLuggageCharge(55, 190);