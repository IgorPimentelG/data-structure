import { Node } from "./node";
import { LinkedList } from "./types";

class ListManager {
  static root: Node;
  private static size = 0;

  static createList(data: string) {
    this.root = new Node(data);
    this.incrementSize();
  }

  static insertStart(data: string) {
    const node = new Node(data, this.root);
    this.root.prev = node;
    this.root = node;
    this.incrementSize();
  }

  static insertPosition(data: string, position: number) {
    let lastNode = this.root;
    let currentPosition = 1;

    if (position > (this.size + 1) || position <= 0) {
      console.log("🚀 ~ Invalid Position!");
      return;
    } else if (position === 1) {
      this.insertStart(data);
    } else {
      while (currentPosition < (position - 1)) {
        if (lastNode.next === null) {
          break;
        }
        currentPosition++;
        lastNode = lastNode.next;
      }
      lastNode.next = new Node(data, lastNode.next, lastNode);
      this.incrementSize();
    }
  }

  static insertEnd(data: string) {
    let lastNode = this.root;

    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = new Node(data, null, lastNode);
    this.incrementSize();
  }

  static remove(position: number) {
    let lastNode = this.root;
    let currentPosition = 1;

    if (position > this.size || position <= 0) {
      console.log("🚀 ~ Invalid Position!");
      return;
    } else if (position === 1) {
      this.root = this.root?.next || new Node("Empty List");
    } else {
      while (currentPosition < (position - 1)) {
        if (lastNode.next === null) {
          break;
        }
        currentPosition++;
        lastNode = lastNode.next;
      }
      lastNode.next = lastNode.next?.next || null;
    }
    this.decrementSize();
  }

  static print() {
    let position = 0;
    let lastNode: LinkedList | null = this.root;

    while (!!lastNode) {
      console.log(`🚀 ~[${++position}] => ${lastNode.data} `);
      lastNode = lastNode.next;
    }
    console.log(`🚀 ~length => ${this.getSize()} `);
  }

  static find(position: number) {
    let lastNode = this.root;
    let currentPosition = 1;
    while (currentPosition < position) {
      currentPosition++;

      if (lastNode.next === null) {
        break;
      }
      lastNode = lastNode.next;
    }
    console.log(
      `🚀 ~find[${position > currentPosition ? "last" : position}] => ${lastNode.data} | next: ${lastNode.next?.data || null} | prev: ${lastNode.prev?.data || null}`
    );
  }

  static getSize() {
    return this.size;
  }

  private static incrementSize() {
    this.size++;
  }

  private static decrementSize() {
    this.size--;
  }
}

export { ListManager };