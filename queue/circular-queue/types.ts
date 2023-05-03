export interface LinkedList {
  data: string;
  next: LinkedList | null;
  prev: LinkedList | null;
}

export interface IStack {
  enqueue: (data: string) => void;
  dequeue: () => void;
  peek: () => void;
  print: () => void;
  getSize(): number;
}

