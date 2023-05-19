export class LinearSearch {

  private data: number[];

  constructor(size: number) {
    this.data = [...Array.from(Array(size).keys())];
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