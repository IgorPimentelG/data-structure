import { generatorDataset } from "./utils/generator";

export class MergeSort {
  sort(size: number) {
    let data = generatorDataset(size);

    console.log(data.join(" - "));
    data = this.mergesort(data);
    console.log(data.join(" - "));
  }

  private mergesort(
    data: number[],
    start: number = 0,
    end: number = data.length
  ): number[] {
    if (start < end) {
      const middle = Math.floor((end + start) / 2);
      const left = this.mergesort(data, start, middle);
      const right = this.mergesort(data, middle + 1, end);
      return this.merge(left, right);
    }
    return data[start] ? [data[start]] : [];
  }

  private merge(left: number[], right: number[]) {
    const ordened: number[] = [];
    let topLeft = 0;
    let topRight = 0;

    const getElementOfLeft = () => {
      ordened.push(left[topLeft]);
      topLeft++;
    }

    const getElementOfRight = () => {
      ordened.push(right[topRight]);
      topRight++;
    }

    while (topLeft < left.length && topRight < right.length) {
      if (left[topLeft] < right[topRight]) {
        getElementOfLeft();
      } else {
        getElementOfRight();
      }
    }

    while (topLeft < left.length) {
      getElementOfLeft();
    }

    while (topRight < right.length) {
      getElementOfRight();
    }

    return ordened;
  }
}