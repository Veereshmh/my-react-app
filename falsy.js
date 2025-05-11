// Q9: How do you filter out falsy values from an array?

const arr = [0, 1, false, 2, '', 3, null];
const truthy = arr.filter(Boolean);
console.log(truthy)