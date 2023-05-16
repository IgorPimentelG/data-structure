import { Page } from "./page";

export class Node {

  private _key: number;
  private _data: string;
  private _pageLeft: Page | null;
  private _pageRight: Page | null;

  constructor(
    key: number,
    data: string,
    pageLeft: Page | null = null,
    pageRight: Page | null = null
  ) {
    this._key = key;
    this._data = data;
    this._pageLeft = pageLeft;
    this._pageRight = pageRight;
  }

  set pageLeft(ref: Page | null) {
    this._pageLeft = ref;
  }

  set pageRight(ref: Page | null) {
    this._pageRight = ref;
  }

  get key(): number {
    return this._key;
  }

  get data(): string {
    return this._data;
  }

  get pageLeft(): Page | null {
    return this._pageLeft;
  }

  get pageRight(): Page | null {
    return this._pageRight;
  }
}