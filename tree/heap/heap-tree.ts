import { Node } from "./node";
import { ITree, SearchResult } from "./types";

export class HeapTree implements ITree {
  private nodes: Node[] = [];
  private size: number = 0;

  insert(key: number, data: string) {
    const node = new Node(key, data);
    this.nodes[this.size] = node;
    this.size++;
    this.buildHeap();
  }

  remove(key: number) {
    if (this.size === 0) {
      console.log("Empty Tree.");
    } else {
      const { node, index } = this.search(key);

      if (node && index !== undefined) {
        const lastNode = this.nodes[this.size - 1];
        this.nodes[index] = lastNode;
        this.nodes.pop();
        this.size--;

        this.heapify();
      } else {
        console.log(`Key ${key} not found.`);
      }
    }
  }

  search(key: number, index: number = 0): SearchResult {
    if (index >= this.size) {
      return { node: null };
    }

    const node = this.nodes[index];
    if (node.key === key) {
      return {
        node,
        index,
      };
    }

    const left = this.search(key, this.getLeftChild(index));
    if (left) {
      return left;
    }

    const right = this.search(key, this.getRightChild(index));
    if (right) {
      return right;
    }

    return { node: null };
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
      console.log(`MIN: [${lesser?.key || null}] - ${lesser?.data || null}\n`);
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

  heapify(index: number = 0, size = this.size) {
    let largest = index;
    const left = this.getLeftChild(index);
    const right = this.getRightChild(index);

    if (left < size && this.nodes[left].key > this.nodes[largest].key) {
      largest = left;
    }

    if (right < size && this.nodes[right].key > this.nodes[largest].key) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapify(largest, size);
    }
  }

  swap(index1: number, index2: number) {
    const aux = this.nodes[index1];
    this.nodes[index1] = this.nodes[index2];
    this.nodes[index2] = aux;
  }

  getNodes() {
    return this.nodes;
  }

  getSize() {
    return this.size;
  }

  private getLeftChild(index: number): number {
    return 2 * index + 1;
  }

  private getRightChild(index: number): number {
    return 2 * index + 2;
  }

  private buildHeap() {
    for (let i = Math.floor(this.size / 2); i >= 0; i--) {
      this.heapify(i);
    }
  }
}