import { AVLTree } from "./avl-tree";

console.log("--- AVL Tree ---");

const tree = new AVLTree();

// Insert
tree.insert(16);
tree.insert(8);
tree.insert(20);
tree.insert(4);
tree.insert(10);
tree.insert(2);
tree.insert(9);

tree.remove(16);

// Show min and max
console.log(`min: ${tree.min()?.data}`);
console.log(`max: ${tree.max()?.data}`);

// Show
tree.preorder();
tree.inorder();
tree.postorder();

// Show height
console.log("Height of tree:", tree.getHeight());
