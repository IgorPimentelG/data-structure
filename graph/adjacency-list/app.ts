import { Graph } from "./graph";

console.log("--- Adjacency List ---");

const graph = new Graph(5);

// Insert
graph.insert(0, 1);
graph.insert(0, 2);
graph.insert(0, 3);
graph.insert(1, 2);

// Remove
graph.remove(1, 2);

// Search
graph.serach(0, 3);
graph.serach(1, 2);
console.log("\n");

// Show
graph.print();