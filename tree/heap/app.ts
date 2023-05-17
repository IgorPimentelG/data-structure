import { Heap } from "./heap";

console.log("--- Heap Tree ---");

const heap = new Heap();

// Insert
heap.insert(5);
heap.insert(7);
heap.insert(9);
heap.insert(4);
heap.insert(1);
heap.insert(2);
heap.insert(3);

// Show
heap.print("PRE_ORDER");
heap.print("IN_ORDER");
heap.print("POST_ORDER");
console.log("\n");

// Min and Max
heap.max();
heap.min();

// Search
console.log("\n");
heap.search(7);