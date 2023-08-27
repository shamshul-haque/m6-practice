const user = {
  id: 1,
  name: "Jhankar",
  job: "trainer",
};
console.log(user);
const userString = JSON.stringify(user); //stringify
console.log(userString);
const userObject = JSON.parse(userString); //parse
console.log(userObject);

const shop = {
  owner: "Alia",
  address: {
    street: "Kocukhet",
    city: "Dhaka",
    country: "Bangladesh",
  },
  products: ["laptop", "monitor", "cpu", "keyboard", "mouse"],
  revenue: "4500",
  isOpen: true,
  isNew: false,
};
console.log(shop);
const shopString = JSON.stringify(shop); //stringify
console.log(shopString);
const shopObject = JSON.parse(shopString); //parse
console.log(shopObject);
