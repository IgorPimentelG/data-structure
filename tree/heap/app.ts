import { HeapTree } from "./heap-tree";

console.log("--- Heap Tree ---");

const tree = new HeapTree();

// Insert
tree.insert(1, "Data 1");
tree.insert(8, "Data 2");
tree.insert(3, "Data 3");
tree.insert(10, "Data 4");
tree.insert(12, "Data 5");
tree.insert(16, "Data 6");
tree.insert(2, "Data 7");
tree.insert(7, "Data 8");
tree.insert(4, "Data 9");
tree.insert(11, "Data 10");

// // Show min and max
tree.max();
tree.min();

// Remove
tree.remove(12);

// Show
tree.preorder();
tree.inorder();
tree.postorder();
