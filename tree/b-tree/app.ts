import { BTree } from "./b-tree";

console.log("--- B Tree ---");

const tree = new BTree(4);

// Insert data
// Page 1
tree.insert(56, "Data 1");
tree.insert(34, "Data 2");
tree.insert(58, "Data 3");
tree.insert(68, "Data 4");

// Page 2
tree.insert(10, "Data 5");
tree.insert(88, "Data 6");
tree.insert(73, "Data 7");
tree.insert(101, "Data 8");

// // Page 3
tree.insert(5, "Data 9");
tree.insert(83, "Data 10");
tree.insert(4, "Data 11");
tree.insert(24, "Data 12");

// // Page 4
tree.insert(55, "Data 13");
tree.insert(64, "Data 14");
tree.insert(18, "Data 15");
tree.insert(47, "Data 16");

// Show all items in tree
tree.print();



