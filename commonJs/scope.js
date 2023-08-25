// block scope
{
  let x = "welcome!";
  console.log(x);
}
// console.log(x); // block scope will not work in out side of block

// global scope
const y = "global";
console.log(y);

// function scope
function food() {
  var fruit = "Apple";
  console.log(fruit);
  console.log(y); // global scope will work anywhere in the bellow position where global scope initialize
}
food();
// console.log(fruit); // global scope will not work in out side of function
