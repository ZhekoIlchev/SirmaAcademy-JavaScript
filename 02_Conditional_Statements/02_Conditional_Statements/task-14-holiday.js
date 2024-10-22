function calculatePrice(budget, season) {
    let destinationMessage = 'Somewhere in ';
    let price;
    let vacationType;

    if (budget <= 100) {
        destinationMessage += 'Bulgaria';

        if (season === 'summer') {
            price = budget * 0.3
            vacationType = 'Camp'
        } else {
            price = budget * 0.7
            vacationType = 'Hotel'
        }

    } else if (budget <= 1000) {
        destinationMessage += 'Europe';

        if (season === 'summer') {
            price = budget * 0.4
            vacationType = 'Camp'
        } else {
            price = budget * 0.8
            vacationType = 'Hotel'
        }

    } else {
        destinationMessage += 'Asia';
        price = budget * 0.9
        vacationType = 'Hotel'
    }

    console.log(destinationMessage);
    console.log(`${vacationType} - ${price}`);
}

calculatePrice(50, "summer");
calculatePrice(75, "winter");
calculatePrice(312, "summer");
calculatePrice(678.53, "winter");
calculatePrice(1500, "summer");