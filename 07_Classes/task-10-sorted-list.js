class List {
  data = [];

  #sort() {
    this.data.sort((a, b) => a - b);
  }

  add(element) {
    this.data.push(element);
    this.#sort();
  }

  remove(index) {
    this.data.splice(index, 1);
    this.#sort;
  }

  get(index) {
    return this.data[index];
  }

  size() {
    return this.data.length;
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));