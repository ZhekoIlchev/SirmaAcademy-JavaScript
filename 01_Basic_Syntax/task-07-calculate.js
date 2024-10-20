function calculate(numOne, numTwo) {
    let sum = numOne + numTwo;
    let difference = numOne - numTwo;
    let product = numOne * numTwo;
    let average = (numOne + numTwo) / 2;

    console.log("Sum is: " + sum);
    console.log("Difference is: " + Math.abs(difference));
    console.log("Product is: " + product);
    console.log("Average is: " + average);
}

calculate(25, 5);
calculate(7, 14);
calculate(12, 1);