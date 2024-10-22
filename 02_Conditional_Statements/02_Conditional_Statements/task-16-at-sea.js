function calculatePrice(days, roomType, assessment) {
    let totalPrice;
    let discount = 0;
    const nights = days - 1;

    if (roomType == 'single room') {
        const singleRoomPrice = 25;
        totalPrice = nights * singleRoomPrice;

    } else if (roomType == 'apartment') {
        const apartmentPrice = 50;
        totalPrice = nights * apartmentPrice

        if (days < 10) {
            discount = 0.3;
        } else if (10 <= days && days <= 15) {
            discount = 0.35;
        } else if (days > 15) {
            discount = 0.5;
        }

    } else {
        const presidentialPrice = 100;
        totalPrice = nights * presidentialPrice;

        if (days < 10) {
            discount = 0.1;
        } else if (10 <= days && days <= 15) {
            discount = 0.15;
        } else if (days > 15) {
            discount = 0.2;
        }

    }

    totalPrice = totalPrice * (1 - discount);

    if (assessment == 'positive') {
        totalPrice = totalPrice * (1 + 0.25);
    } else {
        totalPrice = totalPrice * (1 - 0.1);
    }

    console.log(totalPrice.toFixed(2));
}

calculatePrice(11, "apartment", "positive");
calculatePrice(30, "president apartment", "negative");
calculatePrice(12, "single room", "positive");
calculatePrice(2, "apartment", "positive");