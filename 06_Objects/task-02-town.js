function solve(town) {
  for (let key of Object.keys(town)) {
    console.log(`${key} -> ${town[key]}`);
  }
}

function solve2(town) {
  for (let key in town) {
    console.log(`${key} -> ${town[key]}`);
  }
}

solve({
  name: "Sofia",
  population: 1234567,
  country: "Bulgaria",
  postcode: "1000",
});

console.log("---");

solve2({
  name: "Sofia",
  population: 1234567,
  country: "Bulgaria",
  postcode: "1000",
});