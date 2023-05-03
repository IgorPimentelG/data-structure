export type PriorityLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface LinkedList {
  data: string;
  priority: PriorityLevel;
  next: LinkedList | null;
}

export interface IStack {
  enqueue: (data: string, priority: PriorityLevel) => void;
  dequeue: () => void;
  peek: () => void;
  print: () => void;
  getSize(): number;
}

