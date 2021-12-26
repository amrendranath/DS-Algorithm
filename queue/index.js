class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * Method is used for adding/inserting item at the end of the queue
   * @param {*} item you want to add in queue
   */
  enqueue(item) {
    this.items.push(item);
    return this;
  }

  /**
   * Method is used for removing/deleting an item from the start of the queue
   */
  dequeue() {
    if (this.isEmpty()) {
      return "underflow";
    }
    this.items.shift();
    return this;
  }

  /**
   * Method to check if queue is empty or not.
   * @returns {Boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  front() {
    if (this.isEmpty()) {
      return "underflow";
    }
    return this.items[0];
  }

  printQueue() {
    return this.items.join(" ");
  }
}

module.exports = Queue;

/**
 * Test queue
 */

// // creating object for queue class
// var queue = new Queue();

// // Testing dequeue and pop on an empty queue
// // returns Underflow
// console.log(queue.dequeue());

// // returns true
// console.log(queue.isEmpty());

// // Adding elements to the queue
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.enqueue(60);
// // queue contains [10, 20, 30, 40, 50]
// console.log(queue.printQueue());

// // returns 10
// console.log(queue.front());

// // removes 10 from the queue
// // queue contains [20, 30, 40, 50, 60]
// console.log(queue.dequeue());

// // returns 20
// console.log(queue.front());

// // removes 20
// // queue contains [30, 40, 50, 60]
// console.log(queue.dequeue());

// // printing the elements of the queue
// // prints [30, 40, 50, 60]
// console.log(queue.printQueue());
