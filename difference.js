// Q12: How do you find the difference between two arrays?

const arr1 = [1,2,3,4];
const arr2 = [3,4,5,6];

const difference = arr1.filter(value => !arr2.includes(value));
console.log(difference)