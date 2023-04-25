import { Stack } from "./stack";

console.log("--- Stack ---");

const stack = new Stack();

// Add data
for (let i = 10; i > 0; i--) {
  stack.push(`${i}`);
}

// Show stack length
stack.getSize();

// Show the stack
stack.print();

// Remove data
for (let i = 5; i > 0; i--) {
  stack.pop();
}

// Show root
console.log("\n");
stack.peek();
stack.print();
