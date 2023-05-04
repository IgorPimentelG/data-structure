export class Node {
  data: number;
  right: Node | null;
  left: Node | null;

  constructor(
    data: number,
    right: Node | null = null,
    left: Node | null = null
  ) {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}