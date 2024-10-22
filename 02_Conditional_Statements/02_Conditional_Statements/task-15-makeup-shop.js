function calculateProfit(renovationPrice, powderCount, lipsticksCount, spiralsCount, shadowsCount, concealersCount) {

    const powder = 2.60;
    const lipstick = 3.00;
    const spiral = 4.10;
    const shadows = 8.20;
    const concealer = 2.00

    let productsCount = powderCount + lipsticksCount + spiralsCount + shadowsCount + concealersCount;
    let totalPrice = powder * powderCount + lipstick * lipsticksCount + spiral * spiralsCount + shadows * shadowsCount + concealer * concealersCount;

    if (productsCount >= 50) {
        let discount = 0.25;
        totalPrice = totalPrice * (1 - discount);
    }

    let rentCosts = totalPrice * 0.1;
    totalPrice -= rentCosts;
    let profitAfterRenovation = totalPrice - renovationPrice;

    if (profitAfterRenovation >= 0) {
        console.log(`Yes! ${profitAfterRenovation.toFixed(2)} BGN left.`)
    } else {
        console.log(`Not enough!${Math.abs(profitAfterRenovation.toFixed(2))} BGN needed.`)
    }
}

calculateProfit(40.8, 20, 25, 30, 50, 10);
calculateProfit(320, 8, 2, 5, 5, 1);