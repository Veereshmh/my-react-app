// Q11: How do you find the intersection of two arrays?

const arr1 = [1,2,3,4];
const arr2 = [3,4,5,6]
const Intersection = arr1.filter((value,index) => arr2.includes(value));
console.log(Intersection)