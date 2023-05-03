import { PriorityQueue } from "./queue";

console.log("--- Priority Queue ---");

const queue = new PriorityQueue();

// Add data
queue.enqueue("1", 5);
queue.enqueue("2", 3);
queue.enqueue("3", 10);
queue.enqueue("4", 6);
queue.enqueue("5", 8);
queue.enqueue("6", 10);


// Show queue
queue.print();

// Remove data
for (let i = 3; i > 0; i--) {
  queue.dequeue();
}

console.log("-------------------");

// Show root
queue.peek();
queue.print();
