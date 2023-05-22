import { Node } from "./node";
import { IPage } from "./types";

export class Page implements IPage {

  private _nodes: Node[];
  private _isLeaf: boolean;

  constructor(order: number) {
    this._nodes = new Array(order);
    this._isLeaf = true;
  }

  get nodes(): Node[] {
    return this._nodes;
  }

  get keys(): number {
    return this._nodes.length;
  }

  get isLeaf(): boolean {
    return this._isLeaf;
  }

  set isLeaf(value: boolean) {
    this._isLeaf = value;
  }

  add(nodes: Node[]) {
    this._nodes.push(...nodes);
    this._nodes.sort(this.sortKeys);
  }

  reset() {
    this._nodes = [];
  }

  print() {
    this._nodes.forEach((node) => {
      console.log(`[${node.key}] -> ${node.data}`);
      if (!this._isLeaf) {
        node.pageLeft?.print();
        node.pageRight?.print();
      }
    });
  }

  private sortKeys(node1: Node, node2: Node): number {
    if (node1.key < node2.key) {
      return -1;
    } else if (node1.key > node2.key) {
      return 1;
    }
    return 0;
  }
}