export interface LinkedList {
  data: string;
  next: LinkedList | null;
}

export interface IStack {
  root: LinkedList | null;
  size: number;
  push: (data: string) => void;
  pop: () => void;
  peek: () => void;
  print: () => void;
  getSize(): number;
}

