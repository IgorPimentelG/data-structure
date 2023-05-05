import { Node } from "./node";
import { Print, Tree } from "./types";

export class BinaryTree implements Tree {

  private root: Node | null = null;

  insert(data: number) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      this.searchAndInsert(node, this.root);
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
          }
        }
        return node;
      }

      findNode(data, this.root);
    }
  }

  preorder() {
    const values = this.getValues("PRE_ORDER");
    console.log(`🚀 ~ Pré-order: (${values.join(" - ")})`);
  }

  inorder() {
    const values = this.getValues("IN_ORDER");
    console.log(`🚀 ~ Em-order: (${values.join(" - ")})`);
  }

  postorder() {
    const values = this.getValues("POST_ORDER");
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

  getHeight() {
    let height: number = 0;
    let leftHeight: number = 0;
    let rightHeight: number = 0;

    if (this.root) {
      const calculateLeftHeight = (node: Node) => {
        if (node.left) calculateLeftHeight(node.left);
        leftHeight++
      };

      const calculateRightHeight = (node: Node) => {
        if (node.right) calculateRightHeight(node.right);
        rightHeight++
      };

      calculateLeftHeight(this.root);
      calculateRightHeight(this.root);
      height = leftHeight > rightHeight ? leftHeight : rightHeight;
    }
    console.log("🚀 ~ Height of tree:", height);
    return height;
  }

  private getValues(type: Print) {
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