import { LinkedList } from "./types";

export class Node implements LinkedList {
  data: string;
  next: LinkedList | null;
  prev: LinkedList | null;

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