export class Node {
  private _data: number;
  private _left: Node | null;
  private _right: Node | null;

  constructor(
    data: number,
    left: Node | null = null,
    right: Node | null = null
  ) {
    this._data = data;
    this._left = left;
    this._right = right;
  }

  get data() {
    return this._data;
  }

  get left() {
    return this._left;
  }

  get right() {
    return this._right;
  }

  set data(value: number) {
    this._data = value;
  }

  set left(ref: Node | null) {
    this._left = ref;
  }

  set right(ref: Node | null) {
    this._right = ref;
  }
}