function solve(symbolA, symbolB) {
    let codeSymboleA = String(symbolA).charCodeAt(0);
    let codeSymboleB = String(symbolB).charCodeAt(0);
    let start;
    let end;

    if (codeSymboleA <= codeSymboleB) {
        start = codeSymboleA;
        end = codeSymboleB;
    } else {
        start = codeSymboleB;
        end = codeSymboleA;
    }

    let symbolsInRange = [];

    for (let i = start + 1; i < end; i++) {
        let currentSymbol = String.fromCharCode(i);
        symbolsInRange.push(currentSymbol);
    }

    console.log(symbolsInRange.join(' '));
}

solve('a', 'd');
solve('#', ':');
solve('C', '#');