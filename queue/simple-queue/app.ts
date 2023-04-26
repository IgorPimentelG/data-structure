import { Queue } from "./queue";

console.log("--- Queue ---");

const queue = new Queue();

// Add data
for (let i = 1; i <= 10; i++) {
  queue.enqueue(`${i}`);
}

// Show queue
queue.print();

// Remove data
for (let i = 5; i > 0; i--) {
  queue.dequeue();
}

// Show root
console.log("\n");
queue.peek();
queue.print();
