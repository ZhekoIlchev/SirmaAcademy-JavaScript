function convertEuroToBGN(euro) {
    let fixedRate = 1.95583;
    let bgn = euro * fixedRate;

    console.log(bgn.toFixed(2));
}

convertEuroToBGN(1);
convertEuroToBGN(15);
convertEuroToBGN(123);
convertEuroToBGN(0.5);
convertEuroToBGN(0.51);