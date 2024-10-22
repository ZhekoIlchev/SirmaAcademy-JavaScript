function calculatePrice(product, city, quantity) {
    let totalPrice;

    switch (city) {
        case 'Sofia':
            if (product == 'tea') {
                totalPrice = quantity * 0.50;
            } else if (product == 'water') {
                totalPrice = quantity * 0.80;
            } else if (product == 'juice') {
                totalPrice = quantity * 1.20;
            } else if (product == 'sweets') {
                totalPrice = quantity * 1.45;
            } else if (product == 'chips') {
                totalPrice = quantity * 1.60;
            } else {
                totalPrice = 0;
            }
            break;
        case 'Plovdiv':
            if (product == 'tea') {
                totalPrice = quantity * 0.40;
            } else if (product == 'water') {
                totalPrice = quantity * 0.70;
            } else if (product == 'juice') {
                totalPrice = quantity * 1.15;
            } else if (product == 'sweets') {
                totalPrice = quantity * 1.30;
            } else if (product == 'chips') {
                totalPrice = quantity * 1.50;
            } else {
                totalPrice = 0;
            }
            break;
        case 'Varna':
            if (product == 'tea') {
                totalPrice = quantity * 0.45;
            } else if (product == 'water') {
                totalPrice = quantity * 0.70;
            } else if (product == 'juice') {
                totalPrice = quantity * 1.10;
            } else if (product == 'sweets') {
                totalPrice = quantity * 1.35;
            } else if (product == 'chips') {
                totalPrice = quantity * 1.55;
            } else {
                totalPrice = 0;
            }
            break;
    }

    console.log(totalPrice != 0 ? totalPrice.toFixed(2) : 'Unknown city or product!')
}

calculatePrice("tea", "Varna", 2);
calculatePrice("chips", "Plovdiv", 1);
calculatePrice("juice", "Sofia", 6);
calculatePrice("sweets", "Plovdiv", 1);