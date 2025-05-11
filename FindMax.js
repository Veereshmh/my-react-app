// Q5: How do you find the index of the maximum and minimum element in an array?
const arr = [1,3,7,2,5];
const maxIndex = arr.indexOf(Math.max(...arr)); // maximum
const maxIndex1 = arr.indexOf(Math.min(...arr)); // minimum
console.log(`maximum Index of an array : ${maxIndex}`);
console.log(`Minimum index of an array : ${maxIndex1}`);