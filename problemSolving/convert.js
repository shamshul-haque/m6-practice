/* 
    make the object like {ID01:"abul vai"}
*/
const Persons = [
  { id: "ID01", name: "abul vai", age: 23 },
  { id: "ID02", name: "babul vai", age: 43 },
  { id: "ID03", name: "habul vai", age: 54 },
  { id: "ID04", name: "jabul vai", age: 29 },
];
let obj = {};
Persons.forEach((person) => {
  /* const id = person.id;
    const name = person.name;
    obj[id] = name; */

  //   alternate way
  obj[person.id] = person.name;
});
console.log(obj);
