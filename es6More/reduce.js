// reduce calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
const num = [2, 4, 6, 8, 1, 3, 5, 7, 9];
const total = num.reduce((p, c) => p + c, 0); // 0 is initial value
console.log(total);
