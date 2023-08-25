// primitive type are pass by value
let n1 = 5;
let n2 = 7;
function mul(a, b) {
  a = 12;
  b = 14;
  const result = a * b;
  return result;
}
console.log(n1, n2);
const output = mul(n1, n2);
console.log(output);

// object and array are pass by reference
let student1 = { name: "Sujat", partner: "Mahira" };
let student2 = { name: "Mahin", partner: "Shondhi" };
function makeMovie(couple1, couple2) {
  couple1.partner = "Fariha";
  couple2.name = "Mahib";
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);
