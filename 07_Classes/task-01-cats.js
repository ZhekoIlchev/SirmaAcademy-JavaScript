class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  meow() {
    console.log(`${this.name}, age ${this.age} says meow`);
  }
}

function solve(input) {
  for (const element of input) {
    let [catName, catAge] = element.split(" ");
    let cat = new Cat(catName, catAge);

    cat.meow();
  }
}

solve(["Mellon 2", "Tom 3"]);
solve(["Branch 1", "Poppy 3", "Goldy 2"]);