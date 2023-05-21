import { MergeSort } from "../sorting/merge-sort";

export class BinarySearch {
  private data: number[];

  constructor(size: number) {
    const mergeSort = new MergeSort();
    this.data = mergeSort.sort(size, false);
  }

  search(value: number, start = 0, end = this.data.length - 1) {
    if (start <= end) {
      const middle = Math.ceil((start + end) / 2);

      if (this.data[middle] === value) {
        console.log(`VALUE: ${this.data[middle]} :: INDEX: ${middle}`);
      } else if (this.data[middle] > value) {
        this.search(value, start, middle - 1);
      } else if (this.data[middle] < value) {
        this.search(value, middle + 1, end);
      }
    } else {
      console.log(`${value} - NOT FOUND!`);
    }
  }
}