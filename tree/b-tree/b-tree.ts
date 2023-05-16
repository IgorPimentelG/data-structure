import { Node } from "./node";
import { Page } from "./page";
import { Tree } from "./types";

export class BTree implements Tree {

  private root: Page | null = null;
  private order: number;

  constructor(order: number) {
    this.order = order;
  }

  insert(key: number, data: string) {
    const node = new Node(key, data);

    if (!this.root) {
      const page = new Page(this.order);
      page.add([node]);
      this.root = page;
    } else {
      const { nearestNode, nearestPage } = this.searchNearest(key);

      if (node.key === nearestNode?.key) {
        console.log("Key already exists!");
      } else if (nearestPage) {
        nearestPage.add([node]);

        if (nearestPage.keys >= this.order) {
          this.partition(nearestPage);
        }
      }
    }
  }

  searchNearest(key: number) {
    let page: Page | null = null;
    let node: Node | null = null;

    if (this.root) {
      page = this.root;
      node = page.nodes[0];
      let position = 0;

      while (key !== node.key && page) {
        const nextKey = page.nodes[position + 1]?.key;
        if (key < node.key && key > nextKey) {              // left child
          page = page.nodes[position].pageLeft;
        } else if (key > node.key && key < nextKey) {       // right child
          page = page.nodes[position].pageRight;
        } else if (nextKey) {
          node = page.nodes[++position];
        } else {
          break;
        }
      }
    } else {
      console.log("Empty tree!");
    }

    return {
      nearestPage: page,
      nearestNode: node
    };
  }

  print() {
    if (this.root) {
      this.root.print();
    } else {
      console.log("Empty tree!");
    }
  }

  private partition(page: Page) {
    const middle = this.getMiddle();
    console.log("🚀 ~ file: b-tree.ts:87 ~ BTree ~ partition ~ pageRight:", page.nodes)

    const pageLeft = new Page(this.order);
    pageLeft.add(page.nodes.slice(0, middle));

    const pageRight = new Page(this.order);
    pageRight.add(page.nodes.slice(middle + 1));
    console.log("🚀 ~ file: b-tree.ts:87 ~ BTree ~ partition ~ pageRight:", page.nodes)

    const node = page.nodes[middle];
    node.pageLeft = pageLeft;
    node.pageRight = pageRight;

    if (page == this.root) {
      this.root.reset();
      this.root.add([node]);
      this.root.isLeaf = false;
    }
  }

  private getMiddle(): number {
    const middle = Math.floor(this.order / 2);
    return this.order % 2 === 0 ? middle - 1 : middle;
  }
}