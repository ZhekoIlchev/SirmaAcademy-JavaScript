class MyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    add(element) {
        this.next = element;
    }
}

let firstElement = new MyNode(1);
let secondElement = new MyNode(2);
let thirdElement = new MyNode(3);

firstElement.add(secondElement);
secondElement.add(thirdElement);

class MyLinkedList {
    constructor(data) {
        this.head = data;
    }

    [Symbol.iterator]() {
        let element = this.head;

        return {
            next() {
                if (element) {
                    let elementValue = element.data;
                    element = element.next;
                    return {
                        value: elementValue,
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}
let myLinkedList = new MyLinkedList(firstElement);

for (const element of myLinkedList) {
    console.log(element);
}