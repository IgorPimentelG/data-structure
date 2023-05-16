import { generatorDataset } from "./utils/generator";

export class QuickSort {
  sort(size: number) {
    let data = generatorDataset(size);

    console.log(data.join(" - "));
    this.quickSort(data);
    console.log(data.join(" - "));
  }

  quickSort(
    data: number[],
    start: number = 0,
    end: number = data.length - 1
  ) {
    if (start < end) {
      const pivot = this.partition(data, start, end);
      this.quickSort(data, start, pivot - 1);
      this.quickSort(data, pivot + 1, end);
    }
  }

  partition(data: number[], start: number, end: number) {
    let pointer = start - 1;
    const pivot = data[end];

    for (let i = start; i < end; i++) {
      if (data[i] <= pivot) {
        pointer++;
        this.swap(data, i, pointer);
      }
    }

    pointer++;
    this.swap(data, pointer, end);
    return pointer;
  }

  swap(data: number[], i: number, j: number) {
    const aux = data[i];
    data[i] = data[j];
    data[j] = aux;
  }
}