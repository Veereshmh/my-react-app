// Q10: How do you sum all numbers in an array?

const arr = [1,2,3,4];
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum)