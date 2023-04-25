import { ListManager } from "./list-manager";

console.log("--- Doubly Linked List ---");

// Create a new simple linked list
ListManager.createList("Node 1");

// Insert a node into the end of the list
ListManager.insertEnd("Node 2");
ListManager.insertEnd("Node 3");

// Insert a node into the start of the list
ListManager.insertStart("Node 4");
ListManager.insertStart("Node 5");

// Insert a node at a position in the list
ListManager.insertPosition("Node 6", 1);
ListManager.insertPosition("Node 7", 4);

// Remove a node
ListManager.remove(1);
ListManager.remove(4);

// Show node
ListManager.find(2);
ListManager.find(3);

// Show all nodes
ListManager.print();
