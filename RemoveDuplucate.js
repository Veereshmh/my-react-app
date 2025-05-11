// Remove duplicates from an array - Using Set and filter + indexOf


const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(arr)];
console.log(unique)


// filter and indexOf

const unique1 = arr.filter((value, index) => arr.indexOf(value) === index);
console.log(unique1)