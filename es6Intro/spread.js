// find normal max
const max = Math.max(1, 9, 2, 8, 3, 7, 4, 6, 5);
console.log(max);

// array max
const numbers = [5, 7, 1, 3, 2, 4, 22, 5, 65, 6];
const arrayMax = Math.max(...numbers); // "..." is spread operator. this operator is used to get the desired item of an array
console.log(arrayMax);

// array copy by spread operator
const friend = ["a", "b", "c"];
const dosto = [...friend]; //copy in define variable
console.log(dosto);
friend.push("d");
console.log(friend);
const bondhu = [...friend, "e"]; //add extra element while copy
console.log(bondhu);
