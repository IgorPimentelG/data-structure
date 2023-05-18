export class Node {
  private _key: number;
  private _data: string;

  constructor(
    key: number,
    data: string,
  ) {
    this._key = key;
    this._data = data;
  }

  set key(key: number) {
    this._key = key;
  }

  get key(): number {
    return this._key;
  }

  get data(): string {
    return this._data;
  }
}