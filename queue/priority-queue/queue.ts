import { Node } from "./node";
import { IStack, LinkedList, PriorityLevel } from "./types";

export class PriorityQueue implements IStack {
  private root: LinkedList | null = null;
  private size = 0;

  enqueue(data: string, priority: PriorityLevel) {
    const node = new Node(data, priority);

    if (this.size === 0) {
      this.root = node;
    } else if (this.root!.priority < priority) {
      node.next = this.root;
      this.root = node;
    } else {
      let currentNode = this.root;

      while (currentNode?.next) {
        if (currentNode!.priority >= priority) {
          break;
        }
        currentNode = currentNode!.next;
      }
      node.next = currentNode!.next;
      currentNode!.next = node;
    }
    this.increment();
  }

  dequeue() {
    if (this.size !== 0) {
      this.root = this.root!.next;
      this.decrement();
    } else {
      this.root = null;
      console.log(`🚀 ~ Empty queue`);
    }
  }

  peek() {
    console.log(`🚀 ~ VALUE: ${this.root?.data || null} | PRIORITY: ${this.root?.priority}`);
    return {
      root: this.root,
    };
  }

  print() {
    let position = 0;
    let currentNode = this.root;

    if (this.size === 0) {
      console.log(`🚀 ~ Empty queue`);
    } else {
      while (position < this.size && currentNode) {
        const text = [
          `🚀 ~ [${++position}]: ${currentNode?.data || null}`,
          `PRIORITY: ${currentNode.priority}`,
        ];
        console.log(text.join(" | "));
        currentNode = currentNode?.next;
      }
    }
    console.log(`🚀 ~ Length: ${this.getSize()}`);
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
