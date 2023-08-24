const laptop = [
  { id: 1, brand: "hp", price: 90000 },
  { id: 2, brand: "dell", price: 70000 },
  { id: 3, brand: "lenovo", price: 80000 },
  { id: 4, brand: "acer", price: 60000 },
  { id: 5, brand: "mac", price: 100000 },
];

// chain
console.log(laptop[4].brand);

// map
const brand = laptop.map((p) => p.brand);
console.log(brand);

// foreach
laptop.forEach((p) => console.log(p.id));

// filter
const expensive = laptop.filter((p) => p.price > 80000);
console.log(expensive);

// find
const affordable = laptop.find((p) => p.price < 80000);
console.log(affordable);

// reduce
const total = laptop.reduce((a, c) => a + c.price, 0);
console.log(total);
