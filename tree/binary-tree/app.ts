import { BinaryTree } from "./binary-tree";

console.log("--- Binary Tree ---");

const tree = new BinaryTree();

// Insert
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(12);
tree.insert(16);
tree.insert(2);
tree.insert(1);
tree.insert(4);
tree.insert(11);

// Show min and max
console.log(`🚀 ~ min: ${tree.min()?.data}`);
console.log(`🚀 ~ max: ${tree.max()?.data}`);

// Remove
tree.remove(5);
tree.remove(12);

// Show
tree.preorder();
tree.inorder();
tree.postorder();

// Show height
tree.getHeight();
