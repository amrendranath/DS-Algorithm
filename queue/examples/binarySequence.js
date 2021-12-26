const Queue = require("../index");

// Problem: Generate different binary numbers from 1 to n.

function generateBinarySequence(n) {
  // Create an empty queue of strings
  const q = new Queue();
  const binarySeq = [];

  // Enqueue the first binary number
  q.enqueue("1");

  // This loops is like BFS of a tree with 1 as root
  // 0 as left child and 1 as right child and so on
  while (n-- > 0) {
    // print the front of queue
    var s1 = q.front();
    q.dequeue();
    binarySeq.push(s1);
    // console.log(s1);

    // Store s1 before changing it
    var s2 = s1;

    // Append "0" to s1 and enqueue it
    q.enqueue(s1 + "0");

    // Append "1" to s2 and enqueue it. Note that s2 contains
    // the previous front
    q.enqueue(s2 + "1");
  }
  return binarySeq;
}

console.log(generateBinarySequence(5));
