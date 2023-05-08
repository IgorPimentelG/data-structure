import { Node } from "./node";
import { Print, Tree } from "./types";

export class AVLTree implements Tree {

  private root: Node | null = null;

  insert(data: number) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      this.searchAndInsert(node, this.root);
      this.balance();
    }
  }

  private searchAndInsert(node: Node, father: Node) {
    const isLeft = node.data < father.data;
    const isRight = !isLeft;

    if (isLeft && !father.left) {
      father.left = node;
    } else if (isRight && !father.right) {
      father.right = node;
    } else if (isRight) {
      this.searchAndInsert(node, father.right!);
    } else {
      this.searchAndInsert(node, father.left!);
    }
  }

  remove(data: number) {
    if (!this.root) {
      console.log("🚀 ~ Empty Tree");
    } else {
      const findNode = (value: number, node: Node): Node | null => {
        if (value < node.data && node.left) {
          node.left = findNode(data, node.left);
        } else if (value > node.data && node.right) {
          node.right = findNode(data, node.right);
        } else {
          if (!node.left) {
            return node.right;
          } else if (!node.right) {
            return node.left;
          } else {
            const minValue = this.min(node.right);
            node.data = minValue!.data;
            node.right = findNode(value, node.right);
            this.balance();
          }
        }
        return node;
      }
      findNode(data, this.root);
    }
  }

  preorder() {
    const values = this.getValuesToPrint("PRE_ORDER");
    console.log(`🚀 ~ Pré-order: (${values.join(" - ")})`);
  }

  inorder() {
    const values = this.getValuesToPrint("IN_ORDER");
    console.log(`🚀 ~ Em-order: (${values.join(" - ")})`);
  }

  postorder() {
    const values = this.getValuesToPrint("POST_ORDER");
    console.log(`🚀 ~ Pós-order: (${values.join(" - ")})`);
  }

  min(startNode: Node | null = this.root) {
    if (startNode) {
      let node = startNode;
      while (node.left) {
        node = node.left;
      }
      return node;
    }
    console.log("🚀 ~ Empty Tree");
    return null;
  }

  max(startNode: Node | null = this.root) {
    if (startNode) {
      let node = startNode;
      while (node.right) {
        node = node.right;
      }
      return node;
    }
    console.log("🚀 ~ Empty Tree");
    return null;
  }

  getHeight(startNode: Node | null = this.root) {
    let height = 0;
    let leftHeight = 0;
    let rightHeight = 0;

    if (startNode) {
      const calculateLeftHeight = (node: Node) => {
        if (node.left) calculateLeftHeight(node.left);
        leftHeight++
      };

      const calculateRightHeight = (node: Node) => {
        if (node.right) calculateRightHeight(node.right);
        rightHeight++
      };

      calculateLeftHeight(startNode);
      calculateRightHeight(startNode);
      height = leftHeight > rightHeight ? leftHeight : rightHeight;
    }
    return height;
  }

  private balance() {
    if (this.root) {
      const calculateBalance = (node: Node) => {
        const factor = this.calculateFactor(node);

        if (factor > 1) {
          const leftFactor = this.calculateFactor(node.left as Node);
          if (leftFactor > 0) {
            this.rotateToRight(node);
          } else {
            this.doubleRotateToRight(node);
          }
        } else if (factor < -1) {
          const rightFactor = this.calculateFactor(node.right as Node);
          if (rightFactor < 0) {
            this.rotateToLeft(node);
          } else {
            this.doubleRoutateToLeft(node);
          }
        }
        if (node.left) calculateBalance(node.left);
        if (node.right) calculateBalance(node.right);
      }
      calculateBalance(this.root);
    }
  }

  private rotateToLeft(node: Node) {
    const newFather = node?.right || null;
    node.right = newFather?.left || null;

    if (newFather) newFather.left = node || null;

    if (node.data === this.root!.data) {
      this.root = newFather;
    } else if (newFather) {
      node = newFather;
    }
  }

  private rotateToRight(node: Node) {
    const newFather = node?.left || null;
    node.left = newFather?.right || null;

    if (newFather) newFather.right = node;

    if (node.data === this.root!.data) {
      this.root = newFather;
    } else if (newFather) {
      node = newFather;
    }
  }

  private doubleRotateToRight(node: Node) {
    this.rotateToRight(node.right as Node);
    this.rotateToLeft(node);
  }

  private doubleRoutateToLeft(node: Node) {
    this.rotateToLeft(node.left as Node);
    this.rotateToRight(node);
  }

  private calculateFactor(node: Node) {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  private getValuesToPrint(type: Print) {
    if (this.root) {
      let values: number[] = [];

      const filterByType = (node: Node) => {
        if (type === "PRE_ORDER") values.push(node.data);
        if (node.left) filterByType(node.left);
        if (type === "IN_ORDER") values.push(node.data);
        if (node.right) filterByType(node.right);
        if (type === "POST_ORDER") values.push(node.data);
      };
      filterByType(this.root);
      return values;
    } else {
      console.log("🚀 ~ Empty Tree");
      return [];
    }
  }
}