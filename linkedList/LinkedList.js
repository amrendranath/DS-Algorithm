const Node = require("./ListNode");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    // create a node
    const node = new Node(element);

    // List is empty.
    if (this.head === null) {
      this.head = node;
      this.size++;
      return this;
    }

    // Since list is not empty we have to find the last node to add a new node.
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    // Now that I have found the last node add the new node.
    currentNode.next = node;
    this.size++;

    return this;
  }

  insertAt(element, index) {
    // check if index is valid or not.
    if (index < 0 || index > this.size) {
      console.log("Not a valid index");
      return this;
    }

    // Now that index is valid find the location and add Node.
    const node = new Node(element);

    // If you need to add element at 0 place.
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    let previousNode;
    let i = 0;
    while (i < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }
    previousNode.next = node;
    node.next = currentNode;

    this.size++;

    return this;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.log(`${index} is not a valid index.`);
      return 0;
    }

    let currentNode = this.head;
    let previousNode;
    let i = 0;

    if (index === 0) {
      this.head = currentNode.next;
      currentNode.next = null;
    } else {
      while (i < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      previousNode.next = currentNode.next;
    }

    this.size--;

    return currentNode.data;
  }

  removeData(data) {
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        if (previousNode === null) {
          this.head = currentNode.next;
        } else {
          previousNode.next = currentNode.next;
        }
        this.size--;
        return currentNode.data;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return -1;
  }

  indexOf(data) {
    let index = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        return index;
      }
      index++;
      currentNode = currentNode.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  sizeOfList() {
    return this.size;
  }

  printList() {
    const items = [];
    let currentNode = this.head;
    // console.log("currentNode >>", currentNode);
    while (currentNode !== null) {
      items.push(currentNode.data);
      currentNode = currentNode.next;
    }
    // console.log("items >>>", items);
    return items.join(" ");
  }
}

module.exports = LinkedList;

// creating an object for the
// Linkedlist class
const ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
console.log(ll.printList());

// returns 1
console.log(ll.sizeOfList());

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
console.log(ll.printList());

// prints 50 from the list
console.log("is element removed ? " + ll.removeData(50));

// prints 10 20 30 40
console.log(ll.printList());

// returns 3
console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

console.log(ll.printList());

// returns false
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd element from the list
console.log(ll.removeFrom(3));

// prints 10 20 60 40
console.log(ll.printList());
