import { LinkedList, PriorityLevel } from "./types";

export class Node implements LinkedList {
  data: string;
  priority: PriorityLevel;
  next: LinkedList | null;

  constructor(
    data: string,
    priority: PriorityLevel,
    next: LinkedList | null = null
  ) {
    this.data = data;
    this.next = next;
    this.priority = priority;
  }
}