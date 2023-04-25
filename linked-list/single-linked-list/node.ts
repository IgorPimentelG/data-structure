import { LinkedList } from "./types";

class Node implements LinkedList {
  data: string;
  next: LinkedList | null;

  constructor(data: string, next: LinkedList | null = null) {
    this.data = data;
    this.next = next;
  }
}

export { Node };