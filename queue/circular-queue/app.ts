import { CircularQueue } from "./queue";

console.log("--- Circular Queue ---");

const queue = new CircularQueue();

// Add data
for (let i = 1; i <= 10; i++) {
  queue.enqueue(`${i}`);
}

// Show queue
queue.print();

// Remove data
for (let i = 3; i > 0; i--) {
  queue.dequeue();
}

queue.enqueue("11");

console.log("-------------------");

// Show root
queue.peek();
queue.print();
