import { BubbleSort } from "./bubble-sort";
import { InsertionSort } from "./insertion-sort";
import { SelectionSort } from "./selection-sort";
import { MergeSort } from "./merge-sort";

console.log("--- Selection Sort ---");
const selectionSort = new SelectionSort();
selectionSort.sort(10);

console.log("\n--- Bubble Sort ---");
const bubbleSort = new BubbleSort();
bubbleSort.sort(10);

console.log("\n--- Insertion Sort ---");
const insertionSort = new InsertionSort();
insertionSort.sort(10);

console.log("\n--- Merge Sort ---");
const mergeSort = new MergeSort();
mergeSort.sort(10);