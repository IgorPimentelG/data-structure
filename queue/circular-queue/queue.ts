import { Node } from "./node";
import { IStack, LinkedList } from "./types";

export class CircularQueue implements IStack {
  private front: LinkedList | null = null;
  private rear: LinkedList | null = null;
  private size = 0;

  enqueue(data: string) {
    const node = new Node(data, this.front, this.rear);

    if (this.size === 0) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear!.next = node;
      this.rear = node;
    }
    this.front!.prev = this.rear;
    this.increment();
  }

  dequeue() {
    if (this.size !== 0) {
      const newFront = this.front!.next;
      newFront!.prev = this.rear;
      this.rear!.next = newFront;
      this.front = newFront;
      this.decrement();
    } else {
      this.front = null;
      this.rear = null;
      console.log(`🚀 ~ Empty queue`);
    }
  }

  peek() {
    console.log(`🚀 ~ front: ${this.front?.data || null}`);
    console.log(`🚀 ~ rear: ${this.rear?.data || null}`);

    return {
      front: this.front,
      rear: this.rear,
    };
  }

  print() {
    let position = 0;
    let currentNode = this.front;

    while (position < this.size && currentNode) {
      const text = [
        `🚀 ~ [${++position}]: ${currentNode?.data || null}`,
        `NEXT: ${currentNode.next?.data || null}`,
        `PREV: ${currentNode.prev?.data || null}`
      ];
      console.log(text.join(" | "));
      currentNode = currentNode?.next;
    }
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
