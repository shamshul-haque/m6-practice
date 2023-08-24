// map ==> loops through each *element of the array and do the operation that we passed in the call back function and hold the result from each operation in array and finally returns the array
const numbers = [2, 4, 6, 8];
const double = (n) => n * 2;
const result = numbers.map(double);
console.log(result);
const result1 = numbers.map((n) => n * 2); // different way
console.log(result1);

const friends = ["jodu", "modhu", "kodu"];
const length = friends.map((f) => f.length);
console.log(length);
const firstLetter = friends.map((fl) => fl[0]);
console.log(firstLetter);
