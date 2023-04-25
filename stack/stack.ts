import { Node } from "./node";
import { IStack, LinkedList } from "./types";

export class Stack implements IStack {
  root: LinkedList | null = null;
  size = 0;

  push(data: string) {
    const node = new Node(data, this.root);
    this.root = node;
    this.increment();
  }

  pop() {
    this.root = this.root?.next || null;
    this.decrement();
  }

  peek() {
    console.log(`🚀 ~ root: ${this.root?.data || null}`);
    return this.root;
  }

  print() {
    let lastNode = this.root;
    let position = 0;

    while (position < this.size && lastNode) {
      console.log(`🚀 ~ [${++position}]: ${lastNode.data || null}`);
      lastNode = lastNode?.next;
    }
    console.log(`🚀 ~ length: ${this.getSize()}`);
  }

  getSize() {
    return this.size;
  }

  private increment() {
    this.size++;
  }

  private decrement() {
    this.size--;
  }
}

