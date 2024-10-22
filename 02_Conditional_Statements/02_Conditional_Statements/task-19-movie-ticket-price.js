function calculateTicketPrice(age) {
    let price;

    if (age < 0) {
        console.log('Age cannot be negative number.')
        return;
    }

    if (age <= 12) {
        price = 5;
    } else if (age <= 19) {
        price = 8;
    } else if (age >= 20) {
        price = 10;
    }

    console.log('$' + price);
}

calculateTicketPrice(10);
calculateTicketPrice(16);
calculateTicketPrice(25);
calculateTicketPrice(13);