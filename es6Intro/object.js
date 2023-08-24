const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCline: true,
};
const keys = Object.keys(glass);
console.log(keys);

const values = Object.values(glass);
console.log(values);

const entries = Object.entries(glass);
console.log(entries);

delete glass.isCline;
console.log(glass);
const { isCline, ...rest } = glass; //different way to delete
console.log(rest);

// update existing property by seal
const seal = Object.seal(glass);
glass.price = 500;
console.log(glass);

// const freeze = Object.freeze(glass);
glass.source = "Bangladesh"; // can not be update the object because of freeze
console.log(glass);
