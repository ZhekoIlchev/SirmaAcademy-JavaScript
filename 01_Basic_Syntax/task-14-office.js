function calculateCosts(firstCabinetCost) {
    let secondCabinetCost = firstCabinetCost * (1 - 0.2);
    let thirdCabinetCost = (firstCabinetCost + secondCabinetCost) * (1 + 0.15);
    let totalCost = firstCabinetCost + secondCabinetCost + thirdCabinetCost;

    console.log(totalCost)
}

calculateCosts(380);
calculateCosts(720.50);
calculateCosts(455.30);