import { LinkedList } from "./types";

class Node implements LinkedList {
  data: string;
  prev: LinkedList | null;
  next: LinkedList | null;

  constructor(
    data: string,
    next: LinkedList | null = null,
    prev: LinkedList | null = null
  ) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

export { Node };