export class Graph {

  private matrix: number[][] = [];
  private size: number = 0;

  constructor(size: number) {
    this.size = size;
    for (let i = 0; i < size; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < size; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }

  insert(v1: number, v2: number) {
    if (v1 < 0 || v2 < 0) {
      console.log("Vertex Invalid!");
    } else {
      this.matrix[v1][v2] = 1;
      this.matrix[v2][v1] = 1;
    }
  }

  remove(v1: number, v2: number) {
    if (v1 < 0 || v2 < 0) {
      console.log("Vertex Invalid!");
    } else {
      this.matrix[v1][v2] = 0;
      this.matrix[v2][v1] = 0;
    }
  }

  serach(v1: number, v2: number) {
    const v1ToV2 = this.matrix[v1][v2];
    const v2ToV1 = this.matrix[v2][v1];

    if (v1ToV2 && v2ToV1) {
      console.log(`(${v1}, ${v2}) There is way.`);
    } else {
      console.log(`(${v1}, ${v2}) There is no way.`);
    }
  }

  print() {
    let lineNumber = 0;
    let columnNumber = [...Array.from(Array(this.size).keys())];

    console.log(`   ${columnNumber.join("  ")}`);
    for (let row of this.matrix) {
      const line: string[] = [];
      for (let vertex of row) {
        line.push(`[${vertex}]`);
      }
      console.log(`${lineNumber} ${line.join("")}`);
      lineNumber++;
    }
  }

  dfs(vertex: number) {
    const visited: boolean[] = new Array(this.matrix.length).fill(false);

    console.log("\nDFS:");

    const run = (vertex: number) => {
      visited[vertex] = true;
      console.log(`${vertex} ✅`);

      for (let i = 0; i < this.matrix.length; i++) {
        if (this.matrix[vertex][i] && !visited[i]) {
          run(i);
        }
      }
    }
    run(vertex);
  }
}