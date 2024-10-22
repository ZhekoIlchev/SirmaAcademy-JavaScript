function calculatePrice(product, weekDay, quantity) {
    let totalPrice;
    let isWorkinDay = weekDay === 'Monday'
        || weekDay === 'Tuesday'
        || weekDay === 'Wednesday'
        || weekDay === 'Thursday'
        || weekDay === 'Friday'

    if (isWorkinDay) {
        switch (product) {
            case 'tomato':
                totalPrice = 2.50 * quantity;
                break;
            case 'onion':
                totalPrice = 1.20 * quantity;
                break;
            case 'lettuce':
                totalPrice = 0.85 * quantity;
                break;
            case 'cucumber':
                totalPrice = 1.45 * quantity;
                break;
            case 'pepper':
                totalPrice = 5.50 * quantity;
                break;
            default:
                console.log('error');
                return;
        }
    } else {
        switch (product) {
            case 'tomato':
                totalPrice = 2.80 * quantity;
                break;
            case 'onion':
                totalPrice = 1.30 * quantity;
                break;
            case 'lettuce':
                totalPrice = 0.85 * quantity;
                break;
            case 'cucumber':
                totalPrice = 1.75 * quantity;
                break;
            case 'pepper':
                totalPrice = 3.50 * quantity;
                break;
            default:
                console.log('error');
                return;
        }
    }

    console.log(totalPrice.toFixed(2));
}

calculatePrice('tomato', 'Tuesday', 2);
calculatePrice('onion', 'Sunday', 3);
calculatePrice('pepper', 'Monday', 10);
calculatePrice('banana', 'Friday', 5);