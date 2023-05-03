import { Node } from "./node";
import { IStack, LinkedList } from "./types";

export class Queue implements IStack {
  private root: LinkedList | null = null;
  private size = 0;

  enqueue(data: string) {
    const node = new Node(data);

    if (this.size === 0) {
      this.root = node;
    } else {
      let lastNode = this.root;

      while (lastNode?.next) {
        lastNode = lastNode.next;
      }
      lastNode!.next = node;
    }
    this.increment();
  }

  dequeue() {
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
