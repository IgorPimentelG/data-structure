import { generatorDataset } from "./utils/generator";

export class BubbleSort {
  sort(size: number) {
    const dataset = generatorDataset(size);
    const length = dataset.length;

    console.log(dataset.join(" - "));

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (dataset[j + 1] < dataset[j]) {
          const aux = dataset[j];
          dataset[j] = dataset[j + 1];
          dataset[j + 1] = aux;
        }
      }
    }

    console.log(dataset.join(" - "));
  }
}


