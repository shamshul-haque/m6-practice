// object destructuring
const actor = {
  name: "Hero alom",
  age: 30,
  phone: "0192837465",
  money: 12345,
};
const { phone, age } = actor;
console.log(phone);
console.log(phone);
console.log(phone);
console.log(age);
console.log(age);
const { name, age: boyos } = actor; //change the key name
console.log(boyos);

// array destructuring
const numbers = [25, 45];
const [first, second] = numbers;
console.log(first, second);
