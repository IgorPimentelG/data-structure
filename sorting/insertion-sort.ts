import { generatorDataset } from "./utils/generator";

export class InsertionSort {
  sort(size: number) {
    const dataset = generatorDataset(size);
    const length = dataset.length;

    console.log(dataset.join(" - "));

    for (let i = 1; i < length; i++) {
      let orderned = i - 1;
      const element = dataset[i];

      while (orderned >= 0 && dataset[orderned] > element) {
        dataset[orderned + 1] = dataset[orderned];
        orderned--;
      }
      dataset[orderned + 1] = element;
    }

    console.log(dataset.join(" - "));
  }
}