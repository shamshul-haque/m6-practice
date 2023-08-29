function a() {
  console.log("a");
  b();
  console.log("aa");
}
function b() {
  console.log("b");
  c();
  console.log("bb");
}
function c() {
  console.log("c");
  console.log("cc");
}

function x() {
  console.log("x");
  y();
  console.log("xx");
}
function y() {
  console.log("y");
  z();
  console.log("yy");
}
function z() {
  console.log("z");
  console.log("zz");
}
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
a();
x();

console.log("Synchronous-1");

setTimeout(function timeout() {
  console.log("Asynchronous-1");
}, 5000);

console.log("Synchronous-2");

setTimeout(function timeout() {
  console.log("Asynchronous-2");
}, 10000);

console.log("Synchronous-3");
