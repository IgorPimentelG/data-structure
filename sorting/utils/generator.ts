export const generatorDataset = (size: number): number[] => {
  const data: number[] = [];

  while (data.length < size) {
    const value = Math.floor(Math.random() * size + 1);

    if (!data.includes(value)) {
      data.push(value);
    }
  }
  return data;
}