// Q3: How do you flatten a nested array?

const arr = [1,2,[3,4,[5,6]]]
const flat1 = arr.flat();
console.log(flat1);
const flatInfinity = arr.flat(Infinity);
console.log(flatInfinity);