class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return "underflow";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.items[this.items.length - 1];
  }

  printStack() {
    return this.items.join(" ");
  }
}

module.exports = Stack;

// // creating object for stack class
// const stack = new Stack();

// // testing isEmpty and pop on an empty stack

// // returns false
// console.log(stack.isEmpty());

// // returns Underflow
// console.log(stack.pop());

// // Adding element to the stack
// stack.push(10);
// stack.push(20);
// stack.push(30);

// // Printing the stack element
// // prints [10, 20, 30]
// console.log(stack.printStack());

// // returns 30
// console.log(stack.peek());

// // returns 30 and remove it from stack
// console.log(stack.pop());

// // returns [10, 20]
// console.log(stack.printStack());
