class Vehicle {
  constructor(n, p) {
    this.name = n;
    this.price = p;
  }
}

class Bus extends Vehicle {
  constructor(n, p, s, tp) {
    super(n, p);
    this.seat = s;
    this.ticketPrice = tp;
  }
}

class Truck extends Vehicle {
  constructor(n, p, l) {
    super(n, p);
    this.load = l;
  }
}
