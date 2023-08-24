// for of loop will use on array and string
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const str = "sujat";
for (const element of arr) {
  console.log(element);
}
for (const char of str) {
  console.log(char);
}

// // for in loop will use on object
const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCline: true,
};
for (const key in glass) {
  const value = glass[key];
  console.log(key, value);
}
