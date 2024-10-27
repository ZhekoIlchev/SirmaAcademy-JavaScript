class Laptop {
  isOn = false;

  constructor(info, quality) {
    this.info = info;
    this.quality = quality;
  }

  turnOn() {
    if (!this.isOn) {
      this.isOn = true;
      this.quality--;
    }
  }

  turnOff() {
    if (this.isOn) {
      this.isOn = false;
      this.quality--;
    }
  }

  get price() {
    let price = 800 - this.info.age * 2 + this.quality * 0.5;
    return price;
  }

  showInfo() {
    let computerInfo = JSON.stringify(this.info);
    return computerInfo;
  }
}

let info = { producer: "Asus", age: 2, brand: "Zenbook" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);

console.log("---");

// let info = {producer: 'Lenovo', age: 1, brand: 'Legion'}
// let laptop = new Laptop(info,10);
// laptop.turnOn();
// console.log(laptop.showInfo());
// laptop.turnOff();
// laptop.turnOn();
// laptop.turnOff();
// console.log(laptop.isOn);