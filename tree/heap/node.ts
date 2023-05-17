export class Node {
  private _key: number;
  private _data: string;
  private _right: Node | null;
  private _left: Node | null;

  constructor(
    key: number,
    data: string,
    right: Node | null = null,
    left: Node | null = null
  ) {
    this._key = key;
    this._data = data;
    this._right = right;
    this._left = left;
  }

  set data(data: string) {
    this._data = data;
  }

  set key(key: number) {
    this._key = key;
  }

  set left(ref: Node | null) {
    this._left = ref;
  }

  set right(ref: Node | null) {
    this._right = ref;
  }

  get key(): number {
    return this._key;
  }

  get data(): string {
    return this._data;
  }

  get left(): Node | null {
    return this._left;
  }

  get right(): Node | null {
    return this._right;
  }
}