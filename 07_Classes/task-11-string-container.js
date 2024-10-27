class StringContainer {
  constructor(text, length) {
    this.text = text;
    this.length = length;
    this.initialLenght = length;
  }

  increase(value) {
    this.length += value;

    if (this.length >= this.text.length) {
      this.length = this.text.length;
    }
  }

  decrease(value) {
    this.length -= value;

    if (this.length < 0) {
      this.length = 0;
    }
  }

  toString() {
    let currentState = "";

    if (this.length == 0) {
      return "...";
    } else if (this.length < this.text.length) {
      for (let i = 0; i < this.length; i++) {
        currentState += String(this.text).charAt(i);
      }

      return (currentState += "...");
    } else {
      return this.text;
    }
  }
}

let test = new StringContainer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test