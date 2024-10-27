function solve(input) {
  let register = new Map();

  for (let element of input) {
    let [brand, model, quantity] = element.split(" | ");

    if (!register.has(brand)) {
      let innerMap = new Map();
      innerMap.set(model, Number(quantity));
      register.set(brand, innerMap);
    } else {
      if (!register.get(brand).has(model)) {
        // let innerMap = new Map();
        // innerMap.set(model, quantity);
        register.get(brand).set(model, Number(quantity));
      } else {
        let currentQuantity = Number(register.get(brand).get(model));
        register.get(brand).set(model, currentQuantity + Number(quantity));
      }
    }
  }

  for (let [key, value] of register) {
    console.log(`${key}\n`);
    for (let [innerKey, innerValue] of value) {
      console.log(`###${innerKey} -> ${innerValue}\n`);
    }
  }
}

solve([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);