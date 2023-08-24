// function expression
const sum = function (a, b) {
  return a + b;
};
console.log(sum(5, 7));

// arrow function
const add = (a, b) => a + b;
console.log(add(5, 7));

// multiple parameter
const num = (a, b, c, d, e) => a + b + c + d + e;
console.log(num(2, 4, 6, 8, 10));

// single parameter
const third = (number) => number[3];
console.log(third([1, 2, 3, 4, 5, 6, 7, 8]));

// no parameter
const getPI = () => +Math.PI.toFixed(4);
console.log(getPI());

// large/big arrow function
const doMath = (x, y, z) => {
  const sum = x + y + z;
  const mul = x * y * z;
  const result = mul / sum;
  return +result.toFixed(2);
};
console.log(doMath(1, 3, 5));
