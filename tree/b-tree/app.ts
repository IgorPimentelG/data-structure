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
// tree.insert("Data 5");
// tree.insert("Data 6");
// tree.insert("Data 7");
// tree.insert("Data 8");

// // Page 3
// tree.insert("Data 9");
// tree.insert("Data 10");
// tree.insert("Data 11");
// tree.insert("Data 12");

// // Page 4
// tree.insert("Data 13");
// tree.insert("Data 14");
// tree.insert("Data 15");
// tree.insert("Data 16");

tree.getRoot();

// Show all items in tree
console.log("\n");
//tree.print();



