import { BinarySearch } from "./binary";
import { LinearSearch } from "./linear";

console.log("--- Search ---");

console.log("# LINEAR #");
const linear = new LinearSearch(50);
linear.search(45);
linear.search(1004);

console.log("\n# BINARY #");
const binary = new BinarySearch(50);
binary.search(80);
binary.search(60);
