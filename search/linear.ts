import { generatorDataset } from "../sorting/utils/generator";

export class LinearSearch {

  private data: number[];

  constructor(size: number) {
    this.data = generatorDataset(size);
  }

  search(value: number) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === value) {
        console.log(`VALUE: ${this.data[i]} :: INDEX: ${i}`);
        return;
      }
    }
    console.log(`${value} - NOT FOUND!`);
  }
}