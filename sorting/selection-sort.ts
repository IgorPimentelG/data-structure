import { generatorDataset } from "./utils/generator";

export class SelectionSort {
  sort(size: number) {
    const dataset = generatorDataset(size);
    let length = dataset.length;

    console.log(dataset.join(" - "));

    for (let i = 0; i < length - 1; i++) {
      let smaller = i;
      for (let j = i + 1; j < length; j++) {
        if (dataset[j] < dataset[smaller]) {
          smaller = j;
        }
      }

      const aux = dataset[i];
      dataset[i] = dataset[smaller];
      dataset[smaller] = aux;
    }

    console.log(dataset.join(" - "));
  }
}