import { Node } from "./node";
import { ITree, PrintMethod } from "./types";

export class Heap implements ITree {

  private root: Node | null = null;

  insert(data: number) {
    const node = new Node(data);

    if (!this.root) {
      this.root = node;
    } else {
      this.findAndInsert(node, this.root);
    }
  }

  remove() {

  }

  search(data: number) {
    if (this.root) {
      const filter = (node: Node): Node | undefined => {
        if (node.data === data) {
          return node;
        } else if (node.left && data > node.data) {
          return filter(node.left);
        } else if (node.right && data < node.data) {
          return filter(node.right);
        }
      }

      const node = filter(this.root);
      if (node) {
        console.log(`NODE: ${data} | LEFT: ${node?.left?.data || null} | RIGHT: ${node?.right?.data || null}`);
        return node;
      }
      console.log(`${data} -> Not found!`);
    } else {
      console.log("Empty Tree");
    }
    return null;
  }

  print(type: PrintMethod) {
    const values = this.findAndPrint(type);

    if (values.length) {
      console.log(`[${type}] -> [${values.join(" - ")}]`)
    }
  }

  max() {
    if (this.root) {
      console.log(`MAX: ${this.root.data}`);
      return this.root;
    }
    return null;
  }

  min() {
    if (this.root) {
      let node = this.root;

      while (node.left) {
        node = node.left;
      }

      console.log(`MIN: ${node.data}`);
      return this.root;
    }
    return null;
  }

  private findAndInsert(node: Node, currentNode: Node) {
    const { left, right } = currentNode;

    if (node.data > currentNode.data) {
      const aux = currentNode.data;
      currentNode.data = node.data;
      node.data = aux;
      this.findAndInsert(node, currentNode);
    } else if (!left) {
      currentNode.left = node;
    } else if (!right) {
      currentNode.right = node;
    } else if (right && left && node.data < right.data) {
      this.findAndInsert(node, left!);
    } else {
      this.findAndInsert(node, right!);
    }
  }

  private findAndPrint(type: PrintMethod) {
    if (this.root) {
      const values: number[] = [];

      const filterByType = (node: Node) => {
        if (type === "PRE_ORDER") values.push(node.data);
        if (node.left) filterByType(node.left);
        if (type === "IN_ORDER") values.push(node.data);
        if (node.right) filterByType(node.right);
        if (type === "POST_ORDER") values.push(node.data);
      }

      filterByType(this.root);
      return values;
    } else {
      console.log("Empty tree!");
      return [];
    }
  }
}