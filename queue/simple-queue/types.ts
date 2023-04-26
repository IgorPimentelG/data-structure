export interface LinkedList {
  data: string;
  next: LinkedList | null;
}

export interface IStack {
  root: LinkedList | null;
  size: number;
  enqueue: (data: string) => void;
  dequeue: () => void;
  peek: () => void;
  print: () => void;
  getSize(): number;
}

