import { Node } from "./node";

export class Graph {

  private matrix: (Node | null)[];

  constructor(size: number) {
    this.matrix = new Array(size);
  }

  insert(v1: number, v2: number) {
    const node1 = new Node(v2);
    node1.next = this.matrix[v1];
    this.matrix[v1] = node1;

    const node2 = new Node(v1);
    node2.next = this.matrix[v2];
    this.matrix[v2] = node2;
  }

  remove(v1: number, v2: number) {
    if (v1 < 0 || v2 < 0) {
      console.log("Vertex Invalid!");
    } else {
      this.matrix[v1] = null;
      this.matrix[v2] = null;

      for (let row of this.matrix) {
        let currentNode: Node | null = row;
        while (currentNode !== null) {
          if (
            currentNode &&
            [v1, v2].includes(currentNode.next?.vertex || -1)
          ) {
            currentNode.next = null;
          }
          currentNode = currentNode?.next || null;
        }
      }
    }
  }

  serach(v1: number, v2: number) {
    const v1ToV2 = this.matrix[v1];
    const v2ToV1 = this.matrix[v2];

    if (v1ToV2 && v2ToV1) {
      console.log(`(${v1}, ${v2}) There is way.`);
    } else {
      console.log(`(${v1}, ${v2}) There is no way.`);
    }
  }

  print() {
    let lineNumber = 0;

    for (let row of this.matrix) {
      const line: string[] = [];

      let currentNode: Node | null = row;
      while (currentNode !== null) {
        if (currentNode) {
          line.push(`[${currentNode.vertex}]`);
        }
        currentNode = currentNode?.next || null;
      }

      if (line.length) {
        console.log(`${lineNumber} -> ${line.join("")}`);
        lineNumber++;
      }
    }
  }
}