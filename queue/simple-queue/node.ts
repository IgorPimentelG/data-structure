import { LinkedList } from "./types";

export class Node implements LinkedList {
  data: string;
  next: LinkedList | null;

  constructor(data: string, next: LinkedList | null = null) {
    this.data = data;
    this.next = next;
  }
}