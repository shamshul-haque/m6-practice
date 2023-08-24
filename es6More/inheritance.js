class Vehicle {
  constructor(n, p) {
    this.name = n;
    this.price = p;
  }
}
const a = new Vehicle("Vehicle", 5000000);
console.log(a);

class Bus extends Vehicle {
  constructor(n, p, s, tp) {
    super(n, p);
    this.seat = s;
    this.ticketPrice = tp;
  }
}
const b = new Bus("Ena", 5000000, 52, 400);
console.log(b);

class Truck extends Vehicle {
  constructor(n, p, l) {
    super(n, p);
    this.load = l;
  }
}
const c = new Truck("Truck", 5000000, 5);
console.log(c);
