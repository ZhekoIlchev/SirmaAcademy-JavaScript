function calculateElectricityBill(units, ratePerUnit) {
    let additionalCharge = 10;
    return (units * ratePerUnit) + 10;
}

console.log(calculateElectricityBill(100, 1.0));
console.log(calculateElectricityBill(200, 1.0));
console.log(calculateElectricityBill(150, 1.1));