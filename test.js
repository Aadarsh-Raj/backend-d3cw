const BinarySearch = require("./index.js");

const sortedArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue1 = 44;

const result1 = BinarySearch.binarySearch(sortedArray1, targetValue1);
console.log(result1);

const sortedArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue2 = 10;

const result2 = BinarySearch.binarySearch(sortedArray2, targetValue2);
console.log(result2);