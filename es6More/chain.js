const data = [{ id: 1, name: "jodu", addr: "dhaka" }];
console.log(data[0].addr);

const products = {
  count: 5000,
  data1: [
    { id: 1, name: "modu", addr: "chittagong" },
    { id: 1, name: "kodu", addr: "khulna" },
  ],
};
console.log(products.data1[1].addr);

const user = {
  id: 1,
  name: "sudu",
  addr: {
    street: {
      first: "71/A",
      second: "Uttor",
      third: "jatrabari",
    },
    city: "rajshahi",
  },
};
console.log(user.addr.street.third);

const user1 = {
  id: 1,
  name: "sudu",
  addr: {
    first: "71/A",
    second: "Uttor",
    third: "jatrabari",
    city: "rajshahi",
  },
};
console.log(user1.addr.street?.third); // ? is optional chaining
