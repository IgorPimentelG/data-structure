export class Node {
  private _vertex: number;
  private _next: Node | null;

  constructor(vertex: number, next: Node | null = null) {
    this._vertex = vertex;
    this._next = next;
  }

  set next(ref: Node | null) {
    this._next = ref;
  }

  get next(): Node | null {
    return this._next;
  }

  get vertex(): number {
    return this._vertex;
  }
}