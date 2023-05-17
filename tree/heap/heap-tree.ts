import { Node } from "./node";
import { Course, ITree } from "./types";

export class HeapTree implements ITree {

  private root: Node | null = null;

  insert(key: number, data: string) {
    const node = new Node(key, data);
    if (!this.root) {
      this.root = node;
    } else {
      this.maxHeapify(node, this.root);
    }
  }

  remove(key: number) {
    if (!this.root) {
      console.log("Empty Tree");
    } else {
      let nodeToRemove: Node | null = null;
      const filter = (node: Node) => {
        if (key === node.key) {
          nodeToRemove = node;
        };
        if (node.left) filter(node.left);
        if (node.right) filter(node.right);
      };

      filter(this.root);

      if (nodeToRemove) {
        let fatherLastNode = this.root;
        while (true) {
          if (!fatherLastNode.right?.right) {
            break;
          }
          fatherLastNode = fatherLastNode.right;
        }

        this.swap(nodeToRemove, fatherLastNode.right as Node);
        fatherLastNode.right = null;
      } else {
        console.log("Key not found!");
      }
    }
  }

  preorder() {
    const values = this.getNodesByCourse("PRE_ORDER");
    console.log(`Pré-order: ${values.join("")}\n`);
  }

  inorder() {
    const values = this.getNodesByCourse("IN_ORDER");
    console.log(`Em-order: ${values.join("")}\n`);
  }

  postorder() {
    const values = this.getNodesByCourse("POST_ORDER");
    console.log(`Pós-order: ${values.join("")}\n`);
  }

  min(showMessage: boolean = true, startNode: Node | null = this.root) {
    if (startNode) {
      let node = startNode;
      while (node.left) {
        node = node.left;
      }

      let currentMin = startNode;
      const filter = (node: Node) => {
        if (node.key < currentMin.key) {
          currentMin = node;
        }

        if (node.left) filter(node.left);
        if (node.right) filter(node.right);
      };
      filter(startNode);

      if (showMessage) {
        console.log(`MIN: [${currentMin?.key || null}] - ${currentMin?.data || null}\n`);
      }
      return currentMin;
    }
    console.log("Empty Tree");
    return null;
  }

  max() {
    if (this.root) {
      console.log(`MAX: [${this.root?.key || null}] - ${this.root?.data || null}`);
      return this.root;
    }
    console.log("Empty Tree");
    return null;
  }

  private maxHeapify(node: Node, currentNode: Node) {
    const { left, right } = currentNode;

    if (left && !right) {
      currentNode.right = node;
      return;
    }

    if (node.key > currentNode.key) {
      this.swap(node, currentNode);
    } else if (left && right && right.key > left.key) {
      this.swap(right, left);
    }

    const isLeft = node.key < currentNode.key;
    const isRight = !isLeft;

    if (isLeft && !left) {
      currentNode.left = node;
    } else if (isRight && !right) {
      currentNode.right = node;
    } else if (isRight) {
      this.maxHeapify(node, right!);
    } else {
      this.maxHeapify(node, left!);
    }
  }

  private getNodesByCourse(course: Course): string[] {
    if (this.root) {
      const nodes: Node[] = [];

      const filterByCourse = (node: Node) => {
        if (course === "PRE_ORDER") nodes.push(node);
        if (node.left) filterByCourse(node.left);
        if (course === "IN_ORDER") nodes.push(node);
        if (node.right) filterByCourse(node.right);
        if (course === "POST_ORDER") nodes.push(node);
      };
      filterByCourse(this.root);
      return nodes.map((node) => `\n:: [${node.key}] - ${node.data}`);
    } else {
      console.log("Empty Tree");
      return [];
    }
  }

  private swap(node1: Node, node2: Node) {
    const { key, data } = node1;
    node1.key = node2.key;
    node1.data = node2.data;
    node2.key = key;
    node2.data = data;
  }
}