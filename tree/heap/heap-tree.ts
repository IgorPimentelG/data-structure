import { Node } from "./node";
import { ITree } from "./types";

export class HeapTree implements ITree {
  private nodes: Node[] = [];
  private size: number = 0;

  insert(key: number, data: string) {
    const node = new Node(key, data);
    this.nodes[this.size] = node;
    this.size++;
    this.buildHeap();
  }

  preorder(index: number = 0) {
    if (index >= this.size) {
      return;
    }

    const node = this.nodes[index];
    console.log(`[${node.key}] - ${node.data}`);

    this.preorder(this.getLeftChild(index));
    this.preorder(this.getRightChild(index));
  }

  min() {
    if (this.size) {
      let lesser = this.nodes[0];

      const findLesser = (index: number = 0) => {
        if (index >= this.size) {
          return;
        }

        if (this.nodes[index].key < lesser.key) {
          lesser = this.nodes[index];
        }
        findLesser(this.getLeftChild(index));
      }

      findLesser();
      console.log(`MIN: [${lesser?.key || null}] - ${lesser?.data || null}`);
      return lesser;
    }
    console.log("Empty Tree");
    return null;
  }

  max() {
    if (this.size) {
      const root = this.nodes[0];
      console.log(`MAX: [${root?.key || null}] - ${root?.data || null}`);
      return root;
    }
    console.log("Empty Tree");
    return null;
  }

  private getLeftChild(index: number): number {
    return 2 * index + 1;
  }

  private getRightChild(index: number): number {
    return 2 * index + 2;
  }

  private heapify(index: number) {
    let largest = index;
    const left = this.getLeftChild(index);
    const right = this.getRightChild(index);

    if (left < this.size && left > largest) {
      largest = left;
    }

    if (right < this.size && right > largest) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapify(largest);
    }
  }

  private buildHeap() {
    for (let i = Math.floor(this.size / 2); i >= 0; i--) {
      this.heapify(i);
    }
  }

  private swap(index1: number, index2: number) {
    const aux = this.nodes[index1];
    this.nodes[index1] = this.nodes[index2];
    this.nodes[index2] = aux;
  }
}