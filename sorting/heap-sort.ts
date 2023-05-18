import { HeapTree } from "../tree/heap/heap-tree";
import { generatorDataset } from "./utils/generator";

export class HeapSort {

  sort(size: number) {
    const data = generatorDataset(size);
    const tree = new HeapTree();

    data.forEach((value) => {
      tree.insert(value, `Data ${value}`);
    });

    console.log(data.join(" - "));
    this.heapSort(tree, data.length);
    console.log(
      tree.getNodes()
        .map((node) => node.key)
        .join(" - ")
    );
  }

  private heapSort(tree: HeapTree, length: number) {
    for (let largest = length - 1; largest > 0; largest--) {
      tree.swap(0, largest);
      tree.heapify(0, largest);
    }
  }
}